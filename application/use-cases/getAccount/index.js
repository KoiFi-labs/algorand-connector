const { getAccount } = require("./getAccount.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(getAccount(dependencies))