const axios = require('axios')
const {AlgorandConnectorError} = require('./errors')
const endpoints = ({url}) => ({
	createApp: ({approvalCode, clearStateCode, ...params})=>  ({  method: 'post',  url: url+'/app',  headers: { 'Content-Type': 'application/json'  }, data: {approvalCode, clearStateCode, ...params} }),
	createASA: (data)=>  ({  method: 'post',  url: url+'/asa',  headers: { 'Content-Type': 'application/json'  }, data }),
	optIn: ({appId, from, ...params})=>  ({  method: 'post',  url: url+'/app/optin',  headers: { 'Content-Type': 'application/json'  }, data: {appId, from, ...params} }),
	commitTransaction: ({signedTransaction, list, callback})=>  ({  method: 'post',  url: url+'/transaction',  headers: { 'Content-Type': 'application/json'  }, data: Object.assign(list?{list}:{blob:signedTransaction.blob},  {callback}) }),
	getTransaction: ({id})=>  ({  method: 'get',  url: url+'/transaction?txId='+id,  headers: { 'Content-Type': 'application/json'  } }),
	callApp: ({from, appId, parameters, accounts, foreignApps, txnParams})=>  ({  method: 'post',  url: url+'/app/call',  headers: { 'Content-Type': 'application/json'  }, data: {from, appId, parameters, accounts, foreignApps} }),
	deleteApp: ({appId, parameters, from})=>  ({  method: 'delete',  url: url+'/app?appId='+appId+ (parameters?'&parameters='+parameters.toString():'') + "&from="+from }),
	clearApp: ({appId})=>  ({  method: 'post',  url: url+'/app/clear?appId='+appId }),
	getAccount: ({address})=>  ({  method: 'get',  url: url+'/account?address='+address }),
	combineTransactions: ({transactions})=>  ({  method: 'put',  url: url+'/transaction', data:{transactions} }),
	createFeeTransaction: ({payerAddress})=>  ({  method: 'post',  url: url+'/transaction/fee', data:{payerAddress} }),
	createAlgoTransfer: ({amount, fee, senderAddress, receiverAddress})=>  ({  method: 'post',  url: url+'/transfer', data:{amount, fee, senderAddress, receiverAddress} }),
	transferASA: data => ({  method: 'post',  url: url+'/asa/transfer',  headers: { 'Content-Type': 'application/json'  }, data }),
	getApp: ({appId})=>  ({  method: 'get',  url: url+'/app?appId='+appId }),
})
function sleep(ms) {
	return new Promise((resolve) => {
		ms>0?setTimeout(resolve, ms):resolve();
	});
} 
const backoff = [0]
async function httpRequest(config){
	let error = null
	for (let bo = 0; bo < backoff.length; bo++) {
		await sleep(backoff[bo])
		try {
			return (await axios(config)).data
		} catch (e) {
			error = e
		}
	}
	if(error.response && error.response.data) throw new AlgorandConnectorError(error.response.data)
	throw new AlgorandConnectorError(error)
	
}
module.exports = ({algorandConnector}) => ({
	
	createAlgorandApp: async ({approvalCode, clearStateCode, numGlobalByteSlices = 0, numGlobalInts = 0, numLocalByteSlices = 0, numLocalInts = 0, parameters = [], senderAddress, txnParams}) => {
		if(!approvalCode) throw new AlgorandConnectorError("approvalCode code missing for createAlgorandApp")
		if(!clearStateCode) throw new AlgorandConnectorError("clearStateCode missing for createAlgorandApp")
		return await httpRequest(endpoints(algorandConnector).createApp({approvalCode, clearStateCode, numGlobalByteSlices, numGlobalInts, numLocalByteSlices, numLocalInts, parameters, creatorAddress: senderAddress, txnParams}))
	},
	createASA: async ({from,total,decimals,assetName,unitName,assetURL, assetMetadataHash,defaultFrozen,freeze,manager,clawback,reserve,suggestedParams}) => {
			return httpRequest(endpoints(algorandConnector).createASA({from,total,decimals,assetName,unitName,assetURL,defaultFrozen,freeze,manager,clawback,reserve,suggestedParams,assetMetadataHash}))

	},
	optInAlgorandApp: async ({appId, from, parameters=[],txnParams}) => {
		if(isNaN(appId) || appId < 0) throw new AlgorandConnectorError("appId must be an Integer positive number")
		if(!from) throw new AlgorandConnectorError("must provide an address for the optin operation")
		return await httpRequest(endpoints(algorandConnector).optIn({appId, from: from, parameters, txnParams}))
	},
	commitAlgorandTransaction: async ({signedTransaction, list, callback}) => {
		if(!signedTransaction && !Array.isArray(list)) throw new AlgorandConnectorError("signedTransaction or list missing for commitinEthTransaction")
		let body = signedTransaction?{signedTransaction,callback}:{list,callback}
		return await httpRequest(endpoints(algorandConnector).commitTransaction(body))
	},
	getAlgorandTransaction: async ({id}) => {
		return await httpRequest(endpoints(algorandConnector).getTransaction({id}))
	},
	deleteAlgorandApp: async ({appId, parameters, senderAddress}) => {
		return await httpRequest(endpoints(algorandConnector).deleteApp({appId, parameters, from: senderAddress}))
	},
	clearAlgorandApp: async ({appId, senderAddress}) => {
		return await httpRequest(endpoints(algorandConnector).clearApp({appId, senderAddress}))
	},
	getWalletApps: async ({address}) => {
		let account = await httpRequest(endpoints(algorandConnector).getAccount({address}))
		return account['created-apps']
	},
	combineAlgorandTransactions: async ({transactions}) => {
		let combinedTransactions = await httpRequest(endpoints(algorandConnector).combineTransactions({transactions}))
		return combinedTransactions
	},
	createFeeTransaction:  async ({payerAddress}) => {
		return await httpRequest(endpoints(algorandConnector).createFeeTransaction({payerAddress}))
	},
	createAlgoTransfer:  async ({amount, fee, senderAddress, receiverAddress}) => {
		return await httpRequest(endpoints(algorandConnector).createAlgoTransfer({amount, fee, senderAddress, receiverAddress}))
	},
	
	hasOptedInApp: async({appId, address}) => {
		if(!appId) return false
		let account = await httpRequest(endpoints(algorandConnector).getAccount({address}))
		return !!account['apps-local-state'].find(a=>a.id===appId)
	},
	getAccountAppState: async({tokenId, address}) => {
		if(!tokenId) return false
		let account = await httpRequest(endpoints(algorandConnector).getAccount({address}))
		return account.apps.find(a=>a.id===tokenId)
	},
	getAppState: async({tokenId}) => {
		if(!tokenId) return false
		return await httpRequest(endpoints(algorandConnector).getApp({appId: tokenId}))
	},
	accessAlgorandTokenMethod: async({tokenId, parameters = [], senderAddress, foreignApps, txnParams, accounts}) => {
		if(!tokenId) new AlgorandConnectorError("must provide an app for the operation")
		if(!senderAddress) new AlgorandConnectorError("must provide a sender account")
		return await httpRequest(endpoints(algorandConnector).callApp({appId: tokenId, from: senderAddress, parameters,foreignApps, txnParams, accounts}))
	},
	getAlgoBalance: async ({address}) => {
		let account = await httpRequest(endpoints(algorandConnector).getAccount({address}))
		return account.amount
	},
	getAccount: async ({address}) => {
		let account = await httpRequest(endpoints(algorandConnector).getAccount({address}))
		return account
	},
	transferASA: async ({from, 
		recipient, 
		closeRemainderTo, 
		revocationTarget,
		amount, 
		note, 
		assetID} ) => {
		return httpRequest(endpoints(algorandConnector).transferASA({from, 
			recipient, 
			closeRemainderTo, 
			revocationTarget,
			amount, 
			note, 
			assetID}))

}
})