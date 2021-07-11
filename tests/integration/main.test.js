const config = require('./config')
const da = require('../../data-access')
const application = require('../../application')(da(config))
const helpers = require('./helpers')
const validators = require('./validators')
describe("In an integrated system", () => {
    // beforeEach(async ()=>{
    //     let account = await application.getAccountUOC(helpers.wallets[0])
    //     for (let i = 0; i < account['created-apps'].length; i++) {
    //         const app = account['created-apps'][i].id;
    //         let tx = await application.deleteAppUOC({appId: app, from: helpers.wallets[0].address})   
    //         await application.commitTransactionUOC(helpers.sign(tx, helpers.wallets[0]))    
    //     }
    //     for (let i = 0; i < account['apps-local-state'].length; i++) {
    //         const app = account['apps-local-state'][i].id;
    //         let tx = await application.clearAppUOC({appId: app, from: helpers.wallets[0].address})    
    //         await application.commitTransactionUOC(helpers.sign(tx, helpers.wallets[0]))        
    //     }
    // })
    test("user should be able to create a contract deployment transaction", async () => {
        
        await application.createAppUOC({approvalCode: helpers.mintingContract.approvalCode, clearStateCode: helpers.mintingContract.clearStateCode, numGlobalByteSlices: 1, numGlobalInts: 1, numLocalByteSlices: 1, numLocalInts: 1, creatorAddress: helpers.wallets[0].address, parameters:["start"]})

        
    });
    test("user should be able to commit a signed transaction into the system, getting the transaction hash of it", async () => {
        
        let transaction = await application.createAppUOC({approvalCode: helpers.mintingContract.approvalCode, clearStateCode: helpers.mintingContract.clearStateCode, numGlobalByteSlices: 1, numGlobalInts: 1, numLocalByteSlices: 1, numLocalInts: 1, creatorAddress: helpers.wallets[0].address, parameters:["start", 1]})
        let signedTransaction = helpers.sign(transaction, helpers.wallets[0])
        let commitedTx = await application.commitTransactionUOC(signedTransaction)
        expect(validators.validate(commitedTx, validators.Types.CommitedTransaction))
        
    });
    
    test("user should be able to check the status of a transaction identifying it by its hash", async () => {
        
        let transaction = await application.createAppUOC({approvalCode: helpers.mintingContract.approvalCode, clearStateCode: helpers.mintingContract.clearStateCode, numGlobalByteSlices: 1, numGlobalInts: 1, numLocalByteSlices: 1, numLocalInts: 1, creatorAddress: helpers.wallets[0].address, parameters:["start", 1]})
        let signedTransaction = helpers.sign(transaction, helpers.wallets[0])
        let {txId} = await application.commitTransactionUOC(signedTransaction)
        let tx = await application.getTransactionUOC({txId})
        expect(validators.validate(tx, validators.Types.CommitedTransaction))
        
    });

    test("user should be able to recover its account info", async () => {
        
        await application.getAccountUOC(helpers.wallets[0])
        
        
    });
    
    test("user should be able delete its apps", async () => {
        
        const account = await application.getAccountUOC(helpers.wallets[0])
        const app = account['created-apps'].pop().id;
        let transaction = await application.deleteAppUOC({appId: app, from: helpers.wallets[0].address, parameters:["start",1]})   
        let signedTransaction = helpers.sign(transaction, helpers.wallets[0])
        await application.commitTransactionUOC(signedTransaction)
        
    });
    test("user should be able to clear the apps state in his account", async () => {
        let wallet = helpers.wallets[1]
        let account = await application.getAccountUOC(wallet)
        const app = account['apps-local-state'][0].id;
        let tx = await application.clearAppUOC({appId: app, from: wallet.address, parameters:["start",1]})    
        await application.commitTransactionUOC(helpers.sign(tx, wallet)) 
        
    });
    test("system should process pending transactions, and pass them to 'done' status when they are mined, when no transactions are yet done in the system", async () => {
        
        let transaction = await application.createAppUOC({approvalCode: helpers.mintingContract.approvalCode, clearStateCode: helpers.mintingContract.clearStateCode, numGlobalByteSlices: 1, numGlobalInts: 1, numLocalByteSlices: 1, numLocalInts: 1, creatorAddress: helpers.wallets[0].address, parameters:["start", 1]})
        let signedTransaction = helpers.sign(transaction, helpers.wallets[0])
        let commitedTransaction = await application.commitTransactionUOC(signedTransaction)
        
        let tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
        while(tx.status!=="done"){
            //await application.checkBlockchainProgressUOC({})
            tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
            
        }
    });
    test("system should to optin into apps", async () => {
        
        let rbacApp = await helpers.deployApp(application, helpers.walletContract, helpers.wallets[0],["start"])

        let transaction = await application.optinUOC({appId: rbacApp, from: helpers.wallets[1].address})
        let signedTransaction = helpers.sign(transaction, helpers.wallets[1])
        let commitedTransaction = await application.commitTransactionUOC(signedTransaction)
        
        let tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
        while(tx.status!=="done"){
            //await application.checkBlockchainProgressUOC({})
            tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
            
        }


    },50000);
    test("system should allow to access deployed contract methods", async () => {
        
        let rbacApp = await helpers.deployApp(application, helpers.walletContract, helpers.wallets[0],["start"])
        await helpers.optinApp(application, rbacApp, helpers.wallets[1])
        let transaction = await application.appCallUOC({appId: rbacApp, parameters:["add", helpers.wallets[1].address], from: helpers.wallets[0].address})
        let signedTransaction = helpers.sign(transaction, helpers.wallets[0])
        let commitedTransaction = await application.commitTransactionUOC(signedTransaction)
        
        tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
        while(tx.status!=="done"){
            //await application.checkBlockchainProgressUOC({})
            tx = await application.getTransactionUOC({txId: commitedTransaction.txId})
            
        }


    }, 50000);
})