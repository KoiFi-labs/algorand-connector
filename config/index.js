require('dotenv').config()
module.exports = {
    blockchain:{
        token: process.env["ALGO_TOKEN"],
        apikey: {'X-API-Key':process.env["ALGO_API_KEY"]},
        server: process.env["ALGO_SERVER"],
        port: process.env["ALGO_PORT"],
        indexerServer: process.env["INDEXER_SERVER"],
        indexerPort: process.env["INDEXER_PORT"],
        indexerToken: process.env["INDEXER_TOKEN"]
    },
    mongoose:{
        uri:process.env['MONGO_URI'] ,host:process.env['MONGO_URL'], port:process.env['MONGO_PORT'], dbname:process.env['MONGO_DB_NAME']
    },
    port: process.env['HTTP_PORT'],
    txExpirationSeconds: process.env['TX_EXPIRATION'],
    notifications:{
        url: process.env['NOTIFICATIONS_URL']
    }
}