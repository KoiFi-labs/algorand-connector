const { ClearAppError } = require("./errors");

exports.clearApp = ({clearApp}) => async (params) => {
    try{
        return await clearApp(params)
    }catch(error){
        throw new ClearAppError(error)
    }
    
}