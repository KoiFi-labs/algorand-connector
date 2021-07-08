class CommitTransactionError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "CT001"
        this.message = "CommitTransaction error"
        this.details = details
        Error.captureStackTrace(this, CommitTransactionError)
    }
}

module.exports = {CommitTransactionError}