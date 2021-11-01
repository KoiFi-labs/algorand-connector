class CloseOutError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "CO001"
        this.message = "CloseOut error"
        this.details = details
        Error.captureStackTrace(this, CloseOutError)
    }
}

module.exports = {CloseOutError}