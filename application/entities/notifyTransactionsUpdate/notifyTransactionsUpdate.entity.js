const { NotifyTransactionsUpdateError } = require("./errors");

exports.notifyTransactionsUpdate = ({sendCallback}) => async ({transactionList}) => {
    try{
        await Promise.all(transactionList.map(tx=>{
            return tx.callback?sendCallback(tx):null
        }))
    }catch(error){
        throw new NotifyTransactionsUpdateError(error)
    }
    
}