const appCallEntity = require('./appCall')
const clearAppEntity = require('./clearApp')
const closeOutEntity = require('./closeOut')
const combineTransactionsEntity = require('./combineTransactions')
const commitTransactionEntity = require('./commitTransaction')
const createAlgoTransferEntity = require('./createAlgoTransfer')
const createAppEntity = require('./createApp')
const createASAEntity = require('./createASA')
const createFeeTransactionEntity = require('./createFeeTransaction')
const deleteAppEntity = require('./deleteApp')
const getAccountEntity = require('./getAccount')
const getAppEntity = require('./getApp')
const getNewMinedTransactionsEntity = require('./getNewMinedTransactions')
const getTimeErroredTransactionsEntity = require('./getTimeErroredTransactions')
const getTransactionEntity = require('./getTransaction')
const notifyTransactionsUpdateEntity = require('./notifyTransactionsUpdate')
const optinEntity = require('./optin')
const transferASAEntity = require('./transferASA')
const updateTransactionsStatusEntity = require('./updateTransactionsStatus')

module.exports = (dependencies) => ({
	appCall: appCallEntity(dependencies),
	clearApp: clearAppEntity(dependencies),
	closeOut: closeOutEntity(dependencies),
	combineTransactions: combineTransactionsEntity(dependencies),
	commitTransaction: commitTransactionEntity(dependencies),
	createAlgoTransfer: createAlgoTransferEntity(dependencies),
	createApp: createAppEntity(dependencies),
	createASA: createASAEntity(dependencies),
	createFeeTransaction: createFeeTransactionEntity(dependencies),
	deleteApp: deleteAppEntity(dependencies),
	getAccount: getAccountEntity(dependencies),
	getApp: getAppEntity(dependencies),
	getNewMinedTransactions: getNewMinedTransactionsEntity(dependencies),
	getTimeErroredTransactions: getTimeErroredTransactionsEntity(dependencies),
	getTransaction: getTransactionEntity(dependencies),
	notifyTransactionsUpdate: notifyTransactionsUpdateEntity(dependencies),
	optin: optinEntity(dependencies),
	transferASA: transferASAEntity(dependencies),
	updateTransactionsStatus: updateTransactionsStatusEntity(dependencies),

})