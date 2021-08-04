class GetTransactionError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "[GT]"
        this.message = "GetTransaction error"
        this.details = details
        Error.captureStackTrace(this, GetTransactionError)
    }
}

module.exports = {GetTransactionError}