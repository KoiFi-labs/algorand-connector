module.exports = (configuration) => {
    if(configuration.mock){
        const mock = require('./mock');
        mock(configuration)
    }else{
        const db = require('./db');
        db(configuration)
    }

}

