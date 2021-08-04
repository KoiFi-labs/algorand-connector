const { GetTransactionError } = require("./errors");

exports.getTransaction = ({getTransaction}) => async (params) => {
    try{
        let transaction = await getTransaction(params)
        if (transaction) {
            if (
              transaction['confirmed-round'] !== null &&
              transaction['confirmed-round'] > 0
            ) {
              transaction.status = 'done'
              return transaction;
            }
      
            if (
              transaction['pool-error'] != null &&
              transaction['pool-error'].length > 0
            ) {
              // If there was a pool error, then the transaction has been rejected!
                transaction.status = 'errored'
                return transaction
            }else{
                transaction.status = 'pending'
                return transaction
            }
          }else{
              throw "Transaction not found"
          }
    }catch(error){
        throw new GetTransactionError(error)
    }
    
}