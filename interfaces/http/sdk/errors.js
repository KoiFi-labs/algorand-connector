class AlgorandConnectorError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "<ALGOCONN>"
        this.message = "Algorand connector api Error"
        this.details = details
        Error.captureStackTrace(this, AlgorandConnectorError)
    }
    static fromResponse(data){
        
        if(data.code === "[CT]" && data.details.code==="(CT)" && data.details.details.code === "<AOI>") return new AlreadyOptedInError(data)
         return new AlgorandConnectorError(data)
    }
}
class AlreadyOptedInError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "<ALGOCONN>"
        this.message = "Algorand connector api Error"
        this.details = details
        Error.captureStackTrace(this, AlreadyOptedInError)
    }
}
module.exports = {AlgorandConnectorError, AlreadyOptedInError}