const { CreateAppError } = require("./errors");

exports.createApp = ({createApp}) => async ({approvalCode, clearStateCode, ...params}) => {
    try{
        let bufferUnsignedData = await createApp({approvalCode: Buffer.from(approvalCode, 'base64').toString('utf-8'), clearStateCode: Buffer.from(clearStateCode, 'base64').toString('utf-8'),...params})
        return bufferUnsignedData
    }catch(error){
        throw new CreateAppError(error)
    }
    
}