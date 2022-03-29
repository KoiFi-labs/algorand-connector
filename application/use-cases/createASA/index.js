const { createASA } = require("./createASA.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(createASA(dependencies))