module.exports = (configuration) => {
    require('./connection')(configuration.mongoose)
    return require('./dals')(require('./models'))
}