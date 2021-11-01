exports.mintingContract = require('./mintable.json')
exports.walletContract = require('./wallet.json')
const algosdk = require("algosdk");
exports.wallets = [
    {
        address:"SSOSLLZXIHI2V56M5QZSWASM2HWONUM37NWPAA77RRHTUFGCM7VLBZMTUM",
        mnemonic:"shove pelican biology foam license monitor menu true comfort economy arena labor bring anxiety fury road faint rule destroy rule title bundle venture absent learn"
    },
    {
        address: "HDMAIZWJYVM5546FBCDHC3ODZDXBBBG526OBIBAYN2UZTR7G7AMAXSOEFY",
        mnemonic: "stick grow win year list bike sting dune hurdle raise because firm uncover ensure provide vicious current defy antique viable badge cigar bulb absent february"
    },
    {
        address: "FFKNBDFPTIA7HG6JXVQEAXJX2HKXD2KYKWA7OME4UOC6LBNMRRPTWGR6ZE",
        mnemonic: "industry reunion female tape wall another clay cute argue tip network affair inmate hedgehog during salmon betray cotton sorry daughter lumber phone inherit abstract dilemma"
    }
]

exports.sign = function (transaction, account){
    let unsigned = algosdk.decodeUnsignedTransaction(transaction);  
    let myAccount = algosdk.mnemonicToSecretKey(account.mnemonic);
    let signedTxn = algosdk.signTransaction(unsigned, myAccount.sk);
    return signedTxn
};

exports.deployApp = async function (application, contract, creatorAccount, parameters){
    let transaction = await application.createAppUOC({...contract, creatorAddress: creatorAccount.address, parameters})
    let signedTransaction = exports.sign(transaction, exports.wallets[0])
    let commitedTransaction = await application.commitTransactionUOC(signedTransaction)
    
    let tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
    while(tx.status!=="done"){
        //await application.checkBlockchainProgressUOC({})
        tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
        
    }
    return tx['application-index']
}

exports.optinApp = async function(application, appId, from){
    let transaction = await application.optinUOC({appId, from: from.address})
    let signedTransaction = exports.sign(transaction, from)
    let commitedTransaction = await application.commitTransactionUOC(signedTransaction)
    
    let tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
    while(tx.status!=="done"){
        //await application.checkBlockchainProgressUOC({})
        tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
        
    }
}

exports.callApp = async function(application, appId, parameters, from, foreignApps){
    try {
        let transaction = await application.appCallUOC({appId, parameters, from: from.address, foreignApps})
        let signedTransaction = exports.sign(transaction, from)
        let commitedTransaction = await application.commitTransactionUOC(signedTransaction)
        
        tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
        while(tx.status!=="done"){
            //await application.checkBlockchainProgressUOC({})
            tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
            
        }
    } catch (error) {
        throw error
    }

}