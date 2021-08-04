const server = require('./express')
const {results, errors} = require('./presenters')
const middlewares = require('./middlewares')
module.exports = (uoc,{port, auth}) => {
    const routes = require('./routes')(uoc)
    return server(routes, results, errors,port, middlewares({auth, routes}))
}
