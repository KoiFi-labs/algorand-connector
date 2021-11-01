const { CloseOutError } = require("./errors");

exports.closeOut = ({closeOut}) => async (params) => {
    try{
        return await closeOut(params)
    }catch(error){
        throw new CloseOutError(error)
    }
    
}