require('dotenv').config()
module.exports = {
    mongoose :{host:process.env['MONGO_URL'], port:process.env['MONGO_PORT'], dbname:process.env['MONGO_DB_NAME']+'-test', mock:false},
    port:process.env['HTTP_PORT'],
    blockchain:{
        token: process.env["ALGO_TOKEN"],
        server: process.env["ALGO_SERVER"],
        port: process.env["ALGO_PORT"]
    },
    configurations: {
        txExpirationSeconds:  process.env['TX_EXPIRATION_SECONDS'] | 10
    },
    notifications:{
        url: process.env['NOTIFICATIONS_URL']
    }
}