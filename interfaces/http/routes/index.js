module.exports = (deps) => ([
    {"path":"/app", "verb":"POST","uoc":deps.createAppUOC},
    {"path":"/app", "verb":"DELETE","uoc":deps.deleteAppUOC},
    {"path":"/app/optin", "verb":"POST","uoc":deps.optinUOC},
    {"path":"/app/closeout", "verb":"POST","uoc":deps.closeOutUOC},
    {"path":"/transaction", "verb":"POST","uoc":deps.commitTransactionUOC},
    {"path":"/app/call", "verb":"POST","uoc":deps.appCallUOC}
])