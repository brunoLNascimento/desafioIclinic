const prescription = require('../models/prescription_models');

module.exports = {
    async save(body){
        return await prescription.create(body).then( data => {
            return data
        }).catch( error => {
            console.log('Error: ' +error)
            throw error
        })
    }
}