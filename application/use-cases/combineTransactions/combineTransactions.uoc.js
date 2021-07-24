const { CombineTransactionsError } = require("./errors");

exports.combineTransactions = ({combineTransactions}) => async ({transactions}) => {
    try{
        let list = transactions.map(t=>new Uint8Array(Object.values(t)))
        return await combineTransactions({transactions: list})
    }catch(error){
        throw new CombineTransactionsError(error)
    }
    
}