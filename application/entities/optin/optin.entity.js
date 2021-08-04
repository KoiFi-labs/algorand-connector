const { OptinError } = require("./errors");

exports.optin = ({optin}) => async (params) => {
    try{
        return await optin(params)
    }catch(error){
        throw new OptinError(error)
    }
    
}