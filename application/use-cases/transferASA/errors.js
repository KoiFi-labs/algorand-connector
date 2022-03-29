class TransferASAError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "{TASA}"
        this.message = "TransferASA error"
        this.details = details
        Error.captureStackTrace(this, TransferASAError)
    }
}

module.exports = {TransferASAError}