class CreateASAError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "{CASA}"
        this.message = "CreateASA error"
        this.details = details
        Error.captureStackTrace(this, CreateASAError)
    }
}

module.exports = {CreateASAError}