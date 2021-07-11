const { clearApp } = require("./clearApp.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(clearApp(dependencies))