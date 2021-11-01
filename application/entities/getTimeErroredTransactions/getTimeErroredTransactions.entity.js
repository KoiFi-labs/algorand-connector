const { GetTimeErroredTransactionsError } = require("./errors");

exports.getTimeErroredTransactions = ({getExpirationTimeframe, getTransactionsOlderThanDate}) => async ({}) => {
    try{
        let expirationTimeframe = await getExpirationTimeframe({})
        let txs = await getTransactionsOlderThanDate({date: expirationTimeframe, status:'pending'})
        txs.forEach(element => {
            element.status = 'errored'
            element.error = {type:'Expired'}
        });
        return txs
    }catch(error){
        throw new GetTimeErroredTransactionsError(error)
    }
    
}