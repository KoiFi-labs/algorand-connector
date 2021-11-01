const { CombineTransactionsError } = require("./errors");

exports.combineTransactions = ({combineTransactions}) => async (params) => {
    try{
        return await combineTransactions(params)
    }catch(error){
        throw new CombineTransactionsError(error)
    }
    
}