const { find } = require('../models/prescription_models');
const prescription = require('../models/prescription_models');

module.exports = {
    async save(body, t1){
        return await prescription.create(body, { transaction: t1 }).then( data => {
            return data
        }).catch( error => {
            console.log('Error: ' +error)
            throw error
        })
    },

    async find(where){
        return await prescription.findAll( where = { where } ).then( data => {
            return data
        }).catch( error => {
            console.log('Error: ' +error)
            throw error
        })
    }
}