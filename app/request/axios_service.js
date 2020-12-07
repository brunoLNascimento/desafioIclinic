const axios = require('axios');


module.exports = {
    async findRequest(url, token, timeout){
        return await axios.get(url, {
            timeout: timeout,
            Authorization: token
        }).then( response => {
            return response;
        }).catch( error => {
            throw error;
        })
    }
}