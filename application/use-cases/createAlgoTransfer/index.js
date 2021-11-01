const { createAlgoTransfer } = require("./createAlgoTransfer.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(createAlgoTransfer(dependencies))