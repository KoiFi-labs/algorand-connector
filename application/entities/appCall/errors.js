class AppCallError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "AC001"
        this.message = "AppCall error"
        this.details = details
        Error.captureStackTrace(this, AppCallError)
    }
}

module.exports = {AppCallError}