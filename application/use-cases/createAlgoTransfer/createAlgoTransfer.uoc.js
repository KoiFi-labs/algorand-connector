const { CreateAlgoTransferError } = require("./errors");

exports.createAlgoTransfer = ({createAlgoTransfer}) => async (params) => {
    try{
        return await createAlgoTransfer(params)
    }catch(error){
        throw new CreateAlgoTransferError(error)
    }
    
}