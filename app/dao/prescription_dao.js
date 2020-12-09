const { request } = require('express');
const prescription = require('../models/prescription_models');
const { limit } = require("../config/urlConfig")

module.exports = {
    async save(body, t1){
        return await prescription.create(body, { transaction: t1 }).then( data => {
            return data
        }).catch( error => {
            console.log('Error: ' +error)
            throw error
        })
    },

    async find(where, offset){
        return await prescription.findAll({
            where: where,
            offset: offset,
            limit: limit, 
        }).then( data => {
            return data
        }).catch( error => {
            console.log('Error: ' +error)
            throw error
        })
    }
}