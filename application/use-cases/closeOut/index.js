const { closeOut } = require("./closeOut.uoc");
const actor = require("../common/actor");
module.exports = (dependencies) => actor(dependencies)(closeOut(dependencies))