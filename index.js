const config = require('./config')
const dataAccess = require('./data-access')(config)
const application = require('./application')(dataAccess)
const interfaces = require('./interfaces/http')(application,config)
require('./interfaces/cron')(application)