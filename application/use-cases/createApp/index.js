const { createApp } = require("./createApp.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(createApp(dependencies))