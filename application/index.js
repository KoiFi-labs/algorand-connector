const entityFactory = require('./entities')
const uocFactory = require('./use-cases')
module.exports = (dependencies) => uocFactory(entityFactory(dependencies))