const { getTransaction } = require("./getTransaction.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(getTransaction(dependencies))