const { GetAppError } = require("./errors");

exports.getApp = ({getApp, decodeMessagepack}) => async (params) => {
    try{
        let app = await getApp(params)
        if(!app || !app.application) throw "App not found"
        app.globalState = app.application.params['global-state']?app.application.params['global-state'].reduce((r,{key,value})=>{
            r[Buffer.from(key, 'base64')]=value.type===2?value.uint:decodeMessagepack({data:value.bytes})
            return r
        },{}):{}
        
        
        return app
    }catch(error){
        throw new GetAppError(error)
    }
    
}