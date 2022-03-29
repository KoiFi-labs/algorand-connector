const { GetAccountError } = require("./errors");

exports.getAccount = ({getAccount, decodeMessagepack}) => async (params) => {
    try{
        
        let account = await getAccount(params)
        console.log(JSON.stringify(account))
        //acomodo resultados y decodifico las keys de algorand (strings en base64)
        account.apps = account['apps-local-state'].map(state =>  Object.assign({id: state.id},...state['key-value']?state['key-value'].map(({key,value})=>{
                let o = {}
                o[Buffer.from(key, 'base64')]=value.type===2?value.uint:decodeMessagepack({data:value.bytes})
                return o
            }):[]
        ))
        return account
    }catch(error){
        throw new GetAccountError(error)
    }
    
}