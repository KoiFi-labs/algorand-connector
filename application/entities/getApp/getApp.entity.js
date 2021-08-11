const { GetAppError } = require("./errors");

exports.getApp = ({getApp}) => async (params) => {
    try{
        return await getApp(params)
    }catch(error){
        throw new GetAppError(error)
    }
    
}