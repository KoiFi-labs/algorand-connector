const config = require('./config')
const dataAccess = require('./data-access')(config)
const application = require('./application')(dataAccess)
const interfaces = require('./interfaces')(application,config)