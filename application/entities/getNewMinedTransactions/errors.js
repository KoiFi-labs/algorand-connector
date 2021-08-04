class GetNewMinedTransactionsError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "GNMT001"
        this.message = "GetNewMinedTransactions error"
        this.details = details
        Error.captureStackTrace(this, GetNewMinedTransactionsError)
    }
}

module.exports = {GetNewMinedTransactionsError}