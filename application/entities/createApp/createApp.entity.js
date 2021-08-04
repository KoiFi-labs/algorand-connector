const { CreateAppError } = require("./errors");

exports.createApp = ({createApp}) => async (params) => {
    try{
        return await createApp(params)
    }catch(error){
        throw new CreateAppError(error)
    }
    
}