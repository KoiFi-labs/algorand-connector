class GetTimeErroredTransactionsError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "(GTET)"
        this.message = "GetTimeErroredTransactions error"
        this.details = details
        Error.captureStackTrace(this, GetTimeErroredTransactionsError)
    }
}

module.exports = {GetTimeErroredTransactionsError}