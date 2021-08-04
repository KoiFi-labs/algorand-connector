const { CreateAlgoTransferError } = require("./errors");

exports.createAlgoTransfer = ({transferAlgos}) => async (params) => {
    try{
        return await transferAlgos(params)
    }catch(error){
        throw new CreateAlgoTransferError(error)
    }
    
}