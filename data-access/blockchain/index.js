const algosdk = require('algosdk')

async function getBasicProgramBytes(client, stringTEALProgram) {
    const compiledProgram = await client.compile(stringTEALProgram).do();
    return new Uint8Array(Buffer.from(compiledProgram.result, 'base64'));
}

const createApp = ({algodClient}) => async ({approvalCode, clearStateCode, numGlobalByteSlices = 0, numGlobalInts = 0, numLocalByteSlices = 0, numLocalInts = 0, parameters = [], creatorAddress}) => {
    
    const from = creatorAddress;
    const onComplete = algosdk.OnApplicationComplete.NoOpOC;
    
    const approvalProgram = await getBasicProgramBytes(client, approvalCode);
    const clearProgram = await getBasicProgramBytes(client, clearStateCode);
    
    const suggestedParams = await algodClient.getTransactionParams().do();
    
    // create the application creation transaction
    const txn = algosdk.makeApplicationCreateTxn(from, suggestedParams, onComplete, approvalProgram, clearProgram, numLocalInts, numLocalByteSlices, numGlobalInts, numGlobalByteSlices, parameters);
    
    return algosdk.encodeUnsignedTransaction( txn )
}
const commitTransaction = ({algodClient}) =>  ({signedTxnBlob}) => algodClient.sendRawTransaction(signedTxnBlob).do();
const appCall = ({algodClient}) => ({from, appId, args, accounts, foreigApps}) => {
    const txn = algosdk.makeApplicationNoOpTxn(
        from,
        suggestedParams,
        appId,
        args,
        accounts,
        foreigApps
      );
      return algosdk.encodeUnsignedTransaction( txn )
}
const optin = ({algodClient}) => ({from, appId}) => {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeApplicationOptInTxn(
        from,
        suggestedParams,
        appId
      );
      return algosdk.encodeUnsignedTransaction( txn )
}
const closeOut = ({algodClient}) => ({appId, args, from}) => {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeApplicationCloseOutTxn(
        from,
        suggestedParams,
        appId,
        args
      );
      return algosdk.encodeUnsignedTransaction( txn )
}
const deleteApp = ({algodClient}) => ({appId, from}) => {
    const suggestedParams = await algodClient.getTransactionParams().do();
    const txn = algosdk.makeApplicationDeleteTxn(
        from,
        suggestedParams,
        appId
      );
      return algosdk.encodeUnsignedTransaction( txn )
}
module.exports = (blockchain) => {
    let {token, server, port} = blockchain
    let algodClient = new algosdk.Algodv2(token, server, port);
    return {
        createApp: createApp({algodClient}),
        commitTransaction: commitTransaction({algodClient}),
        appCall: appCall({algodClient}),
        optin: optin({algodClient}),
        closeOut: closeOut({algodClient}),
        deleteApp: deleteApp({algodClient})
    }
}