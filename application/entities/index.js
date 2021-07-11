const appCallEntity = require('./appCall')
const clearAppEntity = require('./clearApp')
const closeOutEntity = require('./closeOut')
const commitTransactionEntity = require('./commitTransaction')
const createAppEntity = require('./createApp')
const deleteAppEntity = require('./deleteApp')
const getAccountEntity = require('./getAccount')
const getTransactionEntity = require('./getTransaction')
const optinEntity = require('./optin')

module.exports = (dependencies) => ({
	appCall: appCallEntity(dependencies),
	clearApp: clearAppEntity(dependencies),
	closeOut: closeOutEntity(dependencies),
	commitTransaction: commitTransactionEntity(dependencies),
	createApp: createAppEntity(dependencies),
	deleteApp: deleteAppEntity(dependencies),
	getAccount: getAccountEntity(dependencies),
	getTransaction: getTransactionEntity(dependencies),
	optin: optinEntity(dependencies),

})