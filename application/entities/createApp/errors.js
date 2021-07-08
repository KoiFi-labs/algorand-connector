class CreateAppError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "CA001"
        this.message = "CreateApp error"
        this.details = details
        Error.captureStackTrace(this, CreateAppError)
    }
}

module.exports = {CreateAppError}