const { GetAppError } = require("./errors");

exports.getApp = ({getApp}) => async (params) => {
    try{
        let app = await getApp(params)
        if(!app || !app.application) throw "App not found"
        app.globalState = app.application.params['global-state']?app.application.params['global-state'].map(({key,value})=>{
            let o = {}
            o[Buffer.from(key, 'base64')]=value.type===2?value.uint:value.bytes
            return o
        }):{}
        
        
        return app
    }catch(error){
        throw new GetAppError(error)
    }
    
}