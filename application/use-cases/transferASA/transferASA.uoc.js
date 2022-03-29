const { TransferASAError } = require("./errors");

exports.transferASA = ({transferASA}) => async params => {
    try{
        return await transferASA(params)
    }catch(error){
        throw new TransferASAError(error)
    }
    
}