class DeleteAppError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "(DA)"
        this.message = "DeleteApp error"
        this.details = details
        Error.captureStackTrace(this, DeleteAppError)
    }
}

module.exports = {DeleteAppError}