const { deleteApp } = require("./deleteApp.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(deleteApp(dependencies))