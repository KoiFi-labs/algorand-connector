class ClearAppError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "CA001"
        this.message = "ClearApp error"
        this.details = details
        Error.captureStackTrace(this, ClearAppError)
    }
}

module.exports = {ClearAppError}