const { CheckBlockchainProgressError } = require("./errors");

exports.checkBlockchainProgress = ({getNewMinedTransactions, getTimeErroredTransactions, updateTransactionsStatus, notifyTransactionsUpdate}) => async () => {
    try{
        let transactionList = await getNewMinedTransactions({})
        let erroredTransactionsList = await getTimeErroredTransactions({})
        transactionList = [...erroredTransactionsList.filter(tx=>!transactionList.find(tx2=>tx.id===tx2.id)),...transactionList]
        await updateTransactionsStatus({transactionList})
        await notifyTransactionsUpdate({transactionList})
    }catch(error){
        throw new CheckBlockchainProgressError(error)
    }
    
}