const { optin } = require("./optin.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(optin(dependencies))