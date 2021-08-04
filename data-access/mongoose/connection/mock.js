const mongoose = require('mongoose');
var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);
function buildConnectionString({username, password, host, port}){
	let credentials = username && password ? `${username}:${password}@`:''
	return `${credentials}${host}:${port}`
	
}
const logger = {log:()=>null,error:()=>null,warning:()=>null}
mongoose.set('useCreateIndex', true);

mongoose.connection.on('open', function (ref) {
    connected=true;
    logger.log('Opened connection to mongo server.');
});

mongoose.connection.on('connected', function (ref) {
    connected=true;
    logger.log('Connected to mongo server.');
});

mongoose.connection.on('disconnected', function (ref) {
    connected=false;
    logger.error('Disconnected from mongo server.');
});

mongoose.connection.on('close', function (ref) {
    connected=false;
    logger.warning('Close connection to mongo server');
});

mongoose.connection.on('error', function (err) {
    connected=false;
    logger.error('Error connection to mongo server!', err);
});


module.exports = (configuration) => {

        let connectionString = ''
        if(configuration.replicas){
            logger.log(`${configuration.replicas.length} replicas detected`)
            if(!configuration.replicaName) throw new Error("Missing replicaSet name parametrization")
            connectionString = configuration.replicas.map(buildConnectionString).join(",")+`/${configuration.dbname}?replicaSet=${configuration.replicaName}`
    
        }else{
            logger.log(`Single db connection detected`)
            connectionString = buildConnectionString(configuration)+`/${configuration.dbname}`
        }
        (async () => {await mockgoose.prepareStorage()})()
        let reject =logger.log
        mockgoose.prepareStorage().then(function() {
            mongoose.connect(`mongodb://${connectionString}`,{ useUnifiedTopology: true, useNewUrlParser: true }, (err, res) => {
             logger.log(err)
        })}).catch((reject));

        
}

