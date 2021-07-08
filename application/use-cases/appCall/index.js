const { appCall } = require("./appCall.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(appCall(dependencies))