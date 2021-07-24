const { DeleteAppError } = require("./errors");

exports.deleteApp = ({deleteApp}) => async (params) => {
    try{
        params.parameters = params.parameters?params.parameters.split(','):undefined
        return await deleteApp(params)
    }catch(error){
        throw new DeleteAppError(error)
    }
    
}