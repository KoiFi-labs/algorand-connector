const mongoose = require('mongoose')
var TransactionSchema = new mongoose.Schema({
	nonce: Number,
    gasLimit: Number,
    gasPrice: Number,
    data: String,
    callback: String ,
    receipt: {},
    hash:{type: String, unique: true} ,
    signedTransaction:String ,
    error:{},
    abi:[],
    status: String,
    bytecode: String
},{timestamps:{}})



module.exports = mongoose.model('Transaction', TransactionSchema)