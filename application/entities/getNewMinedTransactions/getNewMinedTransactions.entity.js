const blockchain = require("../../../data-access/blockchain");
const { GetNewMinedTransactionsError } = require("./errors");

exports.getNewMinedTransactions = ({fetchOldestPendingTransaction, getBlockTransactions, getPendingTransactions, getTransaction, getCurrentBlockNumber}) => async ({}) => {
    try{
        let currentBlockNumber = await getCurrentBlockNumber({})
        let blockNumber = 0
        let firstPendingTransaction = await fetchOldestPendingTransaction({})
        let receipt = null
        if(firstPendingTransaction){
            receipt = await getTransaction(firstPendingTransaction)
            if(receipt && receipt["confirmed-round"]){
                blockNumber = receipt["confirmed-round"]
            }else{
                blockNumber = currentBlockNumber -1
            }
        }else{
            return []
        }
        
        let blockTransactions = []
        let transactions = []
        let initialBlockNumber = blockNumber
        do{
            
            blockTransactions = await getBlockTransactions({blockNumber})
            if(blockTransactions.length){
                let pendingTransactions = await getPendingTransactions({ids: blockTransactions.map(t=>t.id)})
                transactions.push(...await Promise.all(pendingTransactions.map(async pt=>{
                    pt.receipt = blockTransactions.find(tx => tx.id === pt.txId)
                    pt.status = 'done'
                    return pt
                })))
            }
            blockNumber+=1
        } while(blockNumber <= currentBlockNumber)
        console.log("Pending transactions search: ",initialBlockNumber, 'to',blockNumber -1 , `rounds analyzed. ${transactions.length?transactions.length+' tx passed from pending to done':''}`)
        return transactions
    }catch(error){
        throw new GetNewMinedTransactionsError(error)
    }
    
}