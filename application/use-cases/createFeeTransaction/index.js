const { createFeeTransaction } = require("./createFeeTransaction.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(createFeeTransaction(dependencies))