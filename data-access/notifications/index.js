const axios = require('axios');
const fs = require('fs');


const sendCallback = ({url}) => async ({callback, status}) => {
    try {
        var config = {
            method: 'POST',
            url: `${url}/notifications`,
            headers: { 
                'Content-Type': 'application/json', 
                'Version': '2.1'
            },
            data: { 
                type: 'callback',
                url: callback.includes('?')?callback+'&status='+status:callback+'?status='+status
            }
        };
        await axios(config)
    } catch (error) {
        throw error
    }

}
module.exports = configurations => ({
    sendCallback: sendCallback(configurations),
})