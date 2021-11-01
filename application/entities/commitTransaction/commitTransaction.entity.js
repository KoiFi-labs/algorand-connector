const { CommitTransactionError } = require("./errors");

exports.commitTransaction = ({commitTransaction, persistTransaction}) => async (params) => {
    try{
        let transaction = await commitTransaction(params)
        Object.assign(transaction, {status: 'pending', callback: params.callback})
        let tx =  await persistTransaction({transaction})
        return tx
    }catch(error){
        throw new CommitTransactionError(error)
    }
    
}