const { CommitTransactionError } = require("./errors");

exports.commitTransaction = ({commitTransaction}) => async (params) => {
    try{
        return await commitTransaction(params)
    }catch(error){
        throw new CommitTransactionError(error)
    }
    
}