const { AppCallError } = require("./errors");

exports.appCall = ({appCall}) => async (params) => {
    try{
        return await appCall(params)
    }catch(error){
        throw new AppCallError(error)
    }
    
}