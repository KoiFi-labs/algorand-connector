const mongoose = require('mongoose');

function buildConnectionString({username, password, host, port}){
	let credentials = username && password ? `${username}:${password}@`:''
	return `${credentials}${host}:${port}`
	
}

mongoose.set('useCreateIndex', true);

mongoose.connection.on('open', function (ref) {
    connected=true;
    console.log('Opened connection to mongo server.');
});

mongoose.connection.on('connected', function (ref) {
    connected=true;
    console.log('Connected to mongo server.');
});

mongoose.connection.on('disconnected', function (ref) {
    connected=false;
    console.error('Disconnected from mongo server.');
});

mongoose.connection.on('close', function (ref) {
    connected=false;
    console.warning('Close connection to mongo server');
});

mongoose.connection.on('error', function (err) {
    connected=false;
    console.error('Error connection to mongo server!', err);
});


module.exports = (configuration) => {
    let connectionString = ''
    if(configuration.replicas){
        console.log(`${configuration.replicas.length} replicas detected`)
        if(!configuration.replicaName) throw new Error("Missing replicaSet name parametrization")
        connectionString = configuration.replicas.map(buildConnectionString).join(",")+`/${configuration.dbname}?replicaSet=${configuration.replicaName}`
    }else{
        if(configuration.uri){
            console.log(`Uri db connection detected`)
            connectionString = configuration.uri
        }else{
            console.log(`Single db connection detected`)
            connectionString = 'mongodb://'+buildConnectionString(configuration)+`/${configuration.dbname}`
        }
    }
    mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true });
    
}

