const { checkBlockchainProgress } = require("./checkBlockchainProgress.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(checkBlockchainProgress(dependencies))