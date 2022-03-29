const { CreateASAError } = require("./errors");

exports.createASA = ({createASA}) => async (params) => {
    try{
        return await createASA(params)
    }catch(error){
        throw new CreateASAError(error)
    }
    
}