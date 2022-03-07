class OverspendError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "<OS>"
        this.message = "Overspend error: fee too low"
        this.details = details
        Error.captureStackTrace(this, OverspendError)
    }
}
class LogicError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "<LE>"
        this.message = "Logic error"
        this.details = details
        Error.captureStackTrace(this, LogicError)
    }
}

class NumberOfAppsError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "<NA>"
        this.message = "Max number of apps reached error"
        this.details = details
        Error.captureStackTrace(this, NumberOfAppsError)
    }
}

class BelowMinBalanceError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "<BMB>"
        this.message = "Below min balance: not enough funds in account"
        this.details = details
        Error.captureStackTrace(this, BelowMinBalanceError)
    }
}

class TransactionAlreadyInLedgerError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "<TAL>"
        this.message = "The transaction has already been commited"
        this.details = details
        Error.captureStackTrace(this, TransactionAlreadyInLedgerError)
    }
}
class AlreadyOptedInError extends Error {
    constructor(details, ...args) {
        super(...args)
        this.code = "<AOI>"
        this.message = "The account has already opted into the app"
        this.details = details
        Error.captureStackTrace(this, AlreadyOptedInError)
    }
}
AlreadyOptedInError
module.exports = {OverspendError, LogicError,NumberOfAppsError,BelowMinBalanceError,TransactionAlreadyInLedgerError, AlreadyOptedInError}