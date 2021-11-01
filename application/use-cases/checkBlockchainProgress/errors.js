class CheckBlockchainProgressError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "CBP001"
        this.message = "CheckBlockchainProgress error"
        this.details = details
        Error.captureStackTrace(this, CheckBlockchainProgressError)
    }
}

module.exports = {CheckBlockchainProgressError}