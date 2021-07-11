class GetAccountError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "GA001"
        this.message = "GetAccount error"
        this.details = details
        Error.captureStackTrace(this, GetAccountError)
    }
}

module.exports = {GetAccountError}