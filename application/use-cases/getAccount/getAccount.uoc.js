const { GetAccountError } = require("./errors");

exports.getAccount = ({getAccount}) => async (params) => {
    try{
        return await getAccount(params)
    }catch(error){
        throw new GetAccountError(error)
    }
    
}