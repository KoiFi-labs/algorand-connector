module.exports = configurations => ({
    getExpirationTimeframe: ()=>new Date(Date.now() - configurations.txExpirationSeconds * 1000)
})