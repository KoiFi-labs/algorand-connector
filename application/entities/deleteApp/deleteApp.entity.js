const { DeleteAppError } = require("./errors");

exports.deleteApp = ({deleteApp}) => async (params) => {
    try{
        return await deleteApp(params)
    }catch(error){
        throw new DeleteAppError(error)
    }
    
}