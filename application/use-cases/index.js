const appCallUOC = require('./appCall')
const checkBlockchainProgressUOC = require('./checkBlockchainProgress')
const clearAppUOC = require('./clearApp')
const closeOutUOC = require('./closeOut')
const combineTransactionsUOC = require('./combineTransactions')
const commitTransactionUOC = require('./commitTransaction')
const createAlgoTransferUOC = require('./createAlgoTransfer')
const createAppUOC = require('./createApp')
const createFeeTransactionUOC = require('./createFeeTransaction')
const deleteAppUOC = require('./deleteApp')
const getAccountUOC = require('./getAccount')
const getTransactionUOC = require('./getTransaction')
const optinUOC = require('./optin')

module.exports = (dependencies) => ({
		appCallUOC: appCallUOC(dependencies),
	checkBlockchainProgressUOC: checkBlockchainProgressUOC(dependencies),
	clearAppUOC: clearAppUOC(dependencies),
	closeOutUOC: closeOutUOC(dependencies),
	combineTransactionsUOC: combineTransactionsUOC(dependencies),
	commitTransactionUOC: commitTransactionUOC(dependencies),
	createAlgoTransferUOC: createAlgoTransferUOC(dependencies),
	createAppUOC: createAppUOC(dependencies),
	createFeeTransactionUOC: createFeeTransactionUOC(dependencies),
	deleteAppUOC: deleteAppUOC(dependencies),
	getAccountUOC: getAccountUOC(dependencies),
	getTransactionUOC: getTransactionUOC(dependencies),
	optinUOC: optinUOC(dependencies),

})