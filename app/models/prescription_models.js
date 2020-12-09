const connection = require('../config/sequelize');
const Sequelize = require('sequelize');
const conexao = connection.sequelize()

const prescription = conexao.define('prescription', {
    prescriptionId:{ 
        type: Sequelize.INTEGER, 
        field: 'prescription_id', 
        allowNull: false, 
        autoIncrement: true, 
        primaryKey: true
    },   
    clinicId:{ 
        type: Sequelize.INTEGER, 
        field: 'clinic_id', 
        allowNull: false
    },
    clinicName: { 
        type: Sequelize.STRING, 
        field: 'clinic_name', 
        allowNull: false
    },
    patientId: { 
        type: Sequelize.INTEGER, 
        field: 'patient_id', 
        allowNull: false
    },
    patientName: { 
        type: Sequelize.STRING,
        field: 'patient_name', 
        allowNull: false
    },
    patientEmail: { 
        type: Sequelize.STRING, 
        field: 'patient_email', 
        allowNull: false
    },
    patientPhone: { 
        type: Sequelize.STRING, 
        field: 'patient_phone',
        allowNull: false
    },
    physicianId: { 
        type: Sequelize.INTEGER,
        field: 'physician_id', 
        allowNull: false
    },
    physicianCrm: { 
        type: Sequelize.STRING, 
        field: 'physician_crm', 
        allowNull: false
    },
    physicianName: {
        type: Sequelize.STRING, 
        field: 'physician_name', 
        allowNull: false
    },
    text: { 
        type: Sequelize.STRING, 
        field: 'text', 
        allowNull: false
    }
}, {
	freezeTableName: true, timestamps:false
	}
);

module.exports = prescription;