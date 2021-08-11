class GetAppError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "GA001"
        this.message = "GetApp error"
        this.details = details
        Error.captureStackTrace(this, GetAppError)
    }
}

module.exports = {GetAppError}