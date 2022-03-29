module.exports = (deps) => ([
    {"path":"/app", "verb":"GET","uoc":deps.getAppUOC},
    {"path":"/app", "verb":"POST","uoc":deps.createAppUOC},
    {"path":"/app", "verb":"DELETE","uoc":deps.deleteAppUOC},
    {"path":"/app/optin", "verb":"POST","uoc":deps.optinUOC},
    {"path":"/app/closeout", "verb":"POST","uoc":deps.closeOutUOC},
    {"path":"/app/clear", "verb":"POST","uoc":deps.clearAppUOC},
    {"path":"/transaction", "verb":"GET","uoc":deps.getTransactionUOC},
    {"path":"/transaction", "verb":"POST","uoc":deps.commitTransactionUOC},
    {"path":"/transaction", "verb":"PUT","uoc":deps.combineTransactionsUOC},
    {"path":"/transaction/fee", "verb":"POST","uoc":deps.createFeeTransactionUOC},
    {"path":"/app/call", "verb":"POST","uoc":deps.appCallUOC},
    {"path":"/account", "verb":"GET","uoc":deps.getAccountUOC},
    {"path":"/transfer", "verb":"POST","uoc":deps.createAlgoTransferUOC},
    {"path":"/asa", "verb":"POST","uoc":deps.createASAUOC},
    {"path":"/asa/transfer", "verb":"POST","uoc":deps.transferASAUOC}
])