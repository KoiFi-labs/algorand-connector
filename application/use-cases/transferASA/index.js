const { transferASA } = require("./transferASA.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(transferASA(dependencies))