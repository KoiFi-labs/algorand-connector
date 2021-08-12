const axios = require('axios');
const fs = require('fs');


const sendCallback = ({url}) => async ({callback, status, receipt}) => {
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
                verb:'post',
                url: callback.includes('?')?callback+'&status='+status:callback+'?status='+status,
                body: receipt
            }
        };
        await axios(config)
    } catch (error) {
        throw error
    }

}
module.exports = ({notifications}) => ({
    sendCallback: sendCallback(notifications),
})