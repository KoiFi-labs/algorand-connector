const { UpdateTransactionsStatusError } = require("./errors");

exports.updateTransactionsStatus = ({updateTransactions}) => async ({transactionList}) => {
    try{
        return await updateTransactions({transactionList})
    }catch(error){
        throw new UpdateTransactionsStatusError(error)
    }
    
}