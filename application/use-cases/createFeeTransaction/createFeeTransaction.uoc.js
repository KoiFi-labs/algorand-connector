const { CreateFeeTransactionError } = require("./errors");

exports.createFeeTransaction = ({createFeeTransaction}) => async (params) => {
    try{
        return await createFeeTransaction(params)
    }catch(error){
        throw new CreateFeeTransactionError(error)
    }
    
}