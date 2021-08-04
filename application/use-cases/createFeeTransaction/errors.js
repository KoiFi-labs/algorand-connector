class CreateFeeTransactionError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "[CFT]"
        this.message = "CreateFeeTransaction error"
        this.details = details
        Error.captureStackTrace(this, CreateFeeTransactionError)
    }
}

module.exports = {CreateFeeTransactionError}