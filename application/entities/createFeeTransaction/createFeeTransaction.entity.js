const { CreateFeeTransactionError } = require("./errors");

exports.createFeeTransaction = ({transferAlgos, getFeePerTransaction}) => async ({payerAddress}) => {
    try{
        const fee = await getFeePerTransaction({})
        return await transferAlgos({amount: 1, fee: fee * 2, senderAddress: payerAddress, receiverAddress: payerAddress})
    }catch(error){
        throw new CreateFeeTransactionError(error)
    }
    
}