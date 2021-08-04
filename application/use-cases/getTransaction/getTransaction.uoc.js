const { GetTransactionError } = require("./errors");

exports.getTransaction = ({getTransaction}) => async (params) => {
    try{
        return await getTransaction(params)
    }catch(error){
        throw new GetTransactionError(error)
    }
    
}