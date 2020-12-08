const axios = require('axios');
const { saveMetric } = require('../service/service');


module.exports = {
    async findRequest(url, token, timeout){
        return await axios.get(url, {
            timeout: timeout,
            Authorization: token
        }).then( response => {
            return response.data;
        }).catch( error => {
            return error;
        })
    },

    async saveMetric(data, url, token, timeout){
        return await axios.post(url, data, {
            timeout: timeout,
            Authorization: token
        }).then( response => {
            return response;
        }).catch( error => {
            throw error;
        })
    }
}