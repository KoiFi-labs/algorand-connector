const { combineTransactions } = require("./combineTransactions.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(combineTransactions(dependencies))