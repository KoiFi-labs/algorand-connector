class UpdateTransactionsStatusError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "UTS001"
        this.message = "UpdateTransactionsStatus error"
        this.details = details
        Error.captureStackTrace(this, UpdateTransactionsStatusError)
    }
}

module.exports = {UpdateTransactionsStatusError}