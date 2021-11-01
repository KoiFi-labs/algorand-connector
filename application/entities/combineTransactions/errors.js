class CombineTransactionsError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "(XT)"
        this.message = "CombineTransactions error"
        this.details = details
        Error.captureStackTrace(this, CombineTransactionsError)
    }
}

module.exports = {CombineTransactionsError}