
const persistTransaction = ({transactionModel}) => async ({transaction}) => {
    let tx = await transactionModel.create(transaction)
    tx = tx.toObject()
    delete tx._id
    tx.id = tx.hash
    return tx
}

const fetchTransaction = ({transactionModel}) => async ({hash}) => {
    let tx = await transactionModel.findOne({hash})
    return tx?tx.toObject():null
}

const updateTransactions = ({transactionModel}) => async ({transactionList}) => {
    await Promise.all(transactionList.map(async tx => {
        return transactionModel.updateOne({hash:tx.hash},{$set:{receipt:tx.receipt, status:tx.status}})
    }))
}
const fetchNewestDoneTransaction = ({transactionModel}) => async ({}) => {
    let txs = await transactionModel.find({$or:[{status:'done'}]}).sort({_id:-1}).limit(1)
    if(txs.length){
        return txs[0]
    }else{
        return null
    }
}

const getPendingTransactions = ({transactionModel}) => async ({hashes}) =>{
    return transactionModel.find({hash:{$in:hashes}})
}

const fetchOldestPendingTransaction = ({transactionModel}) => async ({hashes}) =>{
    let txs = await transactionModel.find({status:'pending'}).sort({_id:1})
    if(txs.length){
        return txs[0]
    }else{
        return null
    }
}

const fetchContract = ({transactionModel}) => async ({address}) => {
    let contractTx = await transactionModel.findOne({'receipt.contractAddress':address})
    if(!contractTx) return null
    contractTx = contractTx.toObject()
    return {address: contractTx.receipt.contractAddress, abi: contractTx.abi, bytecode: contractTx.bytecode}
}
const getTransactionsOlderThanDate = ({transactionModel}) => async ({date, status}) => {
    return await transactionModel.find({'createdAt':{$lte:date}, status})
    
}
module.exports = models => {
    return {
        persistTransaction: persistTransaction(models),
        fetchTransaction: fetchTransaction(models),
        updateTransactions: updateTransactions(models),
        fetchNewestDoneTransaction: fetchNewestDoneTransaction(models),
        getPendingTransactions:  getPendingTransactions(models),
        fetchOldestPendingTransaction: fetchOldestPendingTransaction(models),
        fetchContract: fetchContract(models),
        getTransactionsOlderThanDate: getTransactionsOlderThanDate(models)
        
    }
}