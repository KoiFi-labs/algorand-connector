const mongoose = require('mongoose')
var TransactionSchema = new mongoose.Schema({
    txId:{type: String, unique: true} ,
    signedTransaction:String ,
    error:{},
    receipt:{},
    status: String,
    callback: String
},{timestamps:{}})



module.exports = mongoose.model('Transaction', TransactionSchema)