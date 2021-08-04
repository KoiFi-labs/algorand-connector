class OptinError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "[O001]"
        this.message = "Optin error"
        this.details = details
        Error.captureStackTrace(this, OptinError)
    }
}

module.exports = {OptinError}