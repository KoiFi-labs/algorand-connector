require('dotenv').config()
module.exports = {
    blockchain:{
        token: process.env["ALGO_TOKEN"],
        server: process.env["ALGO_SERVER"],
        port: process.env["ALGO_PORT"]
    },
    mongoose:{
        uri:process.env['MONGO_URI'] ,host:process.env['MONGO_URL'], port:process.env['MONGO_PORT'], dbname:process.env['MONGO_DB_NAME']
    },
    port: process.env['HTTP_PORT']
}