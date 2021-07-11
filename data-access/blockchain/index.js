const algosdk = require('algosdk')

async function getBasicProgramBytes(client, stringTEALProgram) {
    const compiledProgram = await client.compile(stringTEALProgram).do();
    return new Uint8Array(Buffer.from(compiledProgram.result, 'base64'));
}

async function getResult(result){
    try {
        return await result
    } catch (error) {
        throw error.response?error.response.body?error.response.body.message:result:result
    }
}

const createApp = ({algodClient}) => async ({approvalCode, clearStateCode, numGlobalByteSlices = 0, numGlobalInts = 0, numLocalByteSlices = 0, numLocalInts = 0, parameters = [], creatorAddress}) => {
    
    const from = creatorAddress;
    const onComplete = algosdk.OnApplicationComplete.NoOpOC;
    
    const approvalProgram = await getBasicProgramBytes(algodClient, approvalCode);
    const clearProgram = await getBasicProgramBytes(algodClient, clearStateCode);
    
    const suggestedParams = await algodClient.getTransactionParams().do();
    const args = parameters.map(param => algosdk.encodeObj(param))
    // create the application creation transaction
    const txn = algosdk.makeApplicationCreateTxn(from, suggestedParams, onComplete, approvalProgram, clearProgram, numLocalInts, numLocalByteSlices, numGlobalInts, numGlobalByteSlices, args);
    
    return algosdk.encodeUnsignedTransaction( txn )
}
const commitTransaction = ({algodClient}) => async  ({blob}) => await getResult(algodClient.sendRawTransaction(blob).do());
const appCall = ({algodClient}) => async ({from, appId, parameters, accounts, foreignApps}) => {
    const suggestedParams = await algodClient.getTransactionParams().do();
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
const optin = ({algodClient}) => async ({from, appId}) => {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeApplicationOptInTxn(
        from,
        suggestedParams,
        appId
      );
      return algosdk.encodeUnsignedTransaction( txn )
}
const closeOut = ({algodClient}) => async ({appId, args, from}) => {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeApplicationCloseOutTxn(
        from,
        suggestedParams,
        appId,
        args
      );
      return algosdk.encodeUnsignedTransaction( txn )
}
const deleteApp = ({algodClient}) => async ({appId, from, parameters}) => {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const args = parameters?parameters.map(param => algosdk.encodeObj(param)):undefined
    const txn = algosdk.makeApplicationDeleteTxn(
        from,
        suggestedParams,
        appId,
        args
      );
      return algosdk.encodeUnsignedTransaction( txn )
}

const clearApp = ({algodClient}) => async ({appId, from, parameters}) => {
    const suggestedParams = await algodClient.getTransactionParams().do();
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

const getTransaction = ({algodClient}) => async ({txId}) => algodClient.pendingTransactionInformation(txId).do();
module.exports = ({blockchain}) => {
    let {token, server, port} = blockchain
    let algodClient = new algosdk.Algodv2(token, server, port);
    (async ()=>{ await algodClient.healthCheck().do();console.log("Connected to algorand node")})()
    return {
        createApp: createApp({algodClient}),
        commitTransaction: commitTransaction({algodClient}),
        appCall: appCall({algodClient}),
        optin: optin({algodClient}),
        closeOut: closeOut({algodClient}),
        deleteApp: deleteApp({algodClient}),
        getTransaction: getTransaction({algodClient}),
        clearApp: clearApp({algodClient}),
        getAccount: getAccount({algodClient})
    }
}