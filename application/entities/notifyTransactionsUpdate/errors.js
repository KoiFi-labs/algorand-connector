class NotifyTransactionsUpdateError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "NTU001"
        this.message = "NotifyTransactionsUpdate error"
        this.details = details
        Error.captureStackTrace(this, NotifyTransactionsUpdateError)
    }
}

module.exports = {NotifyTransactionsUpdateError}