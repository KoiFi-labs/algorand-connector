const appCallUOC = require('./appCall')
const clearAppUOC = require('./clearApp')
const closeOutUOC = require('./closeOut')
const commitTransactionUOC = require('./commitTransaction')
const createAppUOC = require('./createApp')
const deleteAppUOC = require('./deleteApp')
const getAccountUOC = require('./getAccount')
const getTransactionUOC = require('./getTransaction')
const optinUOC = require('./optin')

module.exports = (dependencies) => ({
		appCallUOC: appCallUOC(dependencies),
	clearAppUOC: clearAppUOC(dependencies),
	closeOutUOC: closeOutUOC(dependencies),
	commitTransactionUOC: commitTransactionUOC(dependencies),
	createAppUOC: createAppUOC(dependencies),
	deleteAppUOC: deleteAppUOC(dependencies),
	getAccountUOC: getAccountUOC(dependencies),
	getTransactionUOC: getTransactionUOC(dependencies),
	optinUOC: optinUOC(dependencies),

})