const Sequelize = require('sequelize')
    , sequelize = require('../config/sequelize');

const prescription = sequelize.define('post', {
    prescription_id:{ type: Sequelize.INTEGER, field: 'prescription_id', allowNull: false, autoIncrement: true, primaryKey: true},
    clinic_id:{ type: Sequelize.INTEGER, field: 'clinic_id', allowNull: false},
    physician_id:{ type: Sequelize.INTEGER, field: 'physician_id', allowNull: false},
    patient_id:{ type: Sequelize.INTEGER, field: 'patient_id', allowNull: false},
    prescription: { type: Sequelize.STRING , field: 'prescription', allowNull: false},
	prescription_date: { type: Sequelize.STRING, field: 'prescription_date', allowNull: false }
}, {
	freezeTableName: true, timestamps:false
	}
);

module.exports = prescription;