const { getApp } = require("./getApp.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(getApp(dependencies))