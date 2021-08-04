const { commitTransaction } = require("./commitTransaction.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(commitTransaction(dependencies))