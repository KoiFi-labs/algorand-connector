module.exports = (configuration) => {
    require('./connection')(configuration)
    return require('./dals')(require('./models'))
}