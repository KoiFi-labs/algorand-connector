const algosdk = require('algosdk');
const { OverspendError, LogicError, NumberOfAppsError, BelowMinBalanceError, TransactionAlreadyInLedgerError} = require('./errors');

async function getBasicProgramBytes(client, stringTEALProgram) {
    const compiledProgram = await client.compile(stringTEALProgram).do();
    return new Uint8Array(Buffer.from(compiledProgram.result, 'base64'));
}

async function getResult(result){
    try {
        return await result
    } catch (error) {
        if(error.response && error.response.body && error.response.body.message){
            if(error.response.body.message.includes("overspend")) throw new OverspendError(error.response.body.message)
            if(error.response.body.message.includes("logic eval error")) throw new LogicError(error.response.body.message)
            if(error.response.body.message.includes("max created apps per acct")) throw new NumberOfAppsError(error.response.body.message)
            if(error.response.body.message.includes("below min")) throw new BelowMinBalanceError(error.response.body.message)
            if(error.response.body.message.includes("already in ledger")) throw new TransactionAlreadyInLedgerError(error.response.body.message)
        }
        throw error.response?error.response.body?error.response.body.message:result:result
    }
}

const createApp = ({algodClient}) => async ({approvalCode, clearStateCode, numGlobalByteSlices = 0, numGlobalInts = 0, numLocalByteSlices = 0, numLocalInts = 0, parameters = [], creatorAddress, txnParams}) => {
    
    const from = creatorAddress;
    const onComplete = algosdk.OnApplicationComplete.NoOpOC;
    
    const approvalProgram = await getBasicProgramBytes(algodClient, approvalCode);
    const clearProgram = await getBasicProgramBytes(algodClient, clearStateCode);
    
    const suggestedParams = Object.assign(await algodClient.getTransactionParams().do(), txnParams);
    const args = parameters.map(param => algosdk.encodeObj(param))
    // create the application creation transaction
    const txn = algosdk.makeApplicationCreateTxn(from, suggestedParams, onComplete, approvalProgram, clearProgram, numLocalInts, numLocalByteSlices, numGlobalInts, numGlobalByteSlices, args);
    txn.fee = txnParams?txnParams.fee?txnParams.fee:txn.fee:txn.fee
    return algosdk.encodeUnsignedTransaction( txn )
}
const commitTransaction = ({algodClient}) => async  ({list, blob}) => {
    return await getResult(algodClient.sendRawTransaction(blob?new Uint8Array(blob):list.map(t=>new Uint8Array(t.blob))).do());
}
const appCall = ({algodClient}) => async ({from, appId, parameters, accounts, foreignApps, txnParams}) => {
    const suggestedParams = Object.assign(await algodClient.getTransactionParams().do(), txnParams);
    const args = parameters.map(param => algosdk.encodeObj(param))
    const txn = algosdk.makeApplicationNoOpTxn(
        from,
        suggestedParams,
        appId,
        args,
        accounts,
        foreignApps
      );
      return algosdk.encodeUnsignedTransaction( txn )
}
const optin = ({algodClient}) => async ({from, appId, txnParams}) => {
    const suggestedParams = Object.assign(await algodClient.getTransactionParams().do(), txnParams);
    const txn = algosdk.makeApplicationOptInTxn(
        from,
        suggestedParams,
        appId
      );
      return algosdk.encodeUnsignedTransaction( txn )
}
const closeOut = ({algodClient}) => async ({appId, args, from, txnParams}) => {
    const suggestedParams = Object.assign(await algodClient.getTransactionParams().do(), txnParams);
    const txn = algosdk.makeApplicationCloseOutTxn(
        from,
        suggestedParams,
        appId,
        args
      );
      return algosdk.encodeUnsignedTransaction( txn )
}
const deleteApp = ({algodClient}) => async ({appId, from, parameters, txnParams}) => {
    const suggestedParams = Object.assign(await algodClient.getTransactionParams().do(), txnParams);
    const args = parameters?parameters.map(param => algosdk.encodeObj(param)):undefined
    const txn = algosdk.makeApplicationDeleteTxn(
        from,
        suggestedParams,
        Number(appId),
        args
      );
      return algosdk.encodeUnsignedTransaction( txn )
}

const clearApp = ({algodClient}) => async ({appId, from, parameters, txnParams}) => {
    const suggestedParams = Object.assign(await algodClient.getTransactionParams().do(), txnParams);
    const args = parameters?parameters.map(param => algosdk.encodeObj(param)):undefined
    const txn = algosdk.makeApplicationClearStateTxn(
        from,
        suggestedParams,
        appId,
        args
      );
      return algosdk.encodeUnsignedTransaction( txn )
}

const getAccount = ({algodClient}) => async ({address}) => {
    
      return algodClient.accountInformation( address ).do()
}

const getBlockTransactions = ({indexer}) => async ({blockNumber}) => {
    const block = await indexer.lookupBlock(blockNumber).do()
    return block.transactions
}

const getTransaction = ({indexer}) => async ({txId}) => {
    try {
        let r = await indexer.lookupTransactionByID( txId).do()
        return r?r.transaction:null
    } catch (error) {
        return null
    }

};

const transferAlgos = ({algodClient}) => async ({amount, fee=algosdk.ALGORAND_MIN_TX_FEE, senderAddress, receiverAddress}) => {
    let params = await algodClient.getTransactionParams().do();
    params.fee = fee
    const txn = algosdk.makePaymentTxnWithSuggestedParams(senderAddress, receiverAddress, amount, undefined,undefined, params); 
    return algosdk.encodeUnsignedTransaction( txn )
}

const getFeePerTransaction = ({}) => async ({}) => {
    return algosdk.ALGORAND_MIN_TX_FEE
}

const combineTransactions = ({}) => async ({transactions}) => {
    transactions = transactions.map(t=>algosdk.decodeUnsignedTransaction(t))
    algosdk.assignGroupID(transactions);
    return transactions.map(t=>algosdk.encodeUnsignedTransaction(t))
}

const getCurrentBlockNumber = ({algodClient}) => async ({}) => {
    let res = await algodClient.status().do()
    return res['last-round'] - 1
}
module.exports = ({blockchain}) => {
    let {token, server, port} = blockchain
    let algodClient = new algosdk.Algodv2(token, server, port);
    let indexer =  new algosdk.Indexer(token, server, 8980);
    (async ()=>{ await algodClient.healthCheck().do();console.log("Connected to algorand node")})()
    const deps = {indexer, algodClient}
    return {
        createApp: createApp(deps),
        commitTransaction: commitTransaction(deps),
        appCall: appCall(deps),
        optin: optin(deps),
        closeOut: closeOut(deps),
        deleteApp: deleteApp(deps),
        getTransaction: getTransaction(deps),
        clearApp: clearApp(deps),
        getAccount: getAccount(deps),
        getBlockTransactions: getBlockTransactions(deps),
        transferAlgos: transferAlgos(deps),
        getFeePerTransaction: getFeePerTransaction(deps),
        combineTransactions: combineTransactions(deps),
        getCurrentBlockNumber: getCurrentBlockNumber(deps)
    }
}