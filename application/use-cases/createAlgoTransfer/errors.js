class CreateAlgoTransferError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "[CAT]"
        this.message = "CreateAlgoTransfer error"
        this.details = details
        Error.captureStackTrace(this, CreateAlgoTransferError)
    }
}

module.exports = {CreateAlgoTransferError}