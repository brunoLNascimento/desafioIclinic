const connection = require('../config/sequelize')
const { authorization, timeout, urlConfig, limit } = require('../config/urlConfig');
const axiosService = require('../request/axios_service');
const dao = require("../dao/prescription_dao")
const dto = require('../dto/prescription_dto')
const metricDto = require('../dto/metrics_dto');
const prescription = require('../models/prescription_models');

module.exports = {
    async find(body){
        try {
            let url = '';
            let bearer = '';
            let time = '';
            let data = {};
        
            if(body.clinic.id){
                url = `${urlConfig.url}clinics/${body.clinic.id}`;
                bearer = authorization.clinics;
                time = timeout.clinics;
                let clinic = await axiosService.findRequest(url, bearer, time);
                
                if(!clinic.message)
                    data.clinic = clinic;
                else
                    console.log("clinic not found");
            }

            if(body.physician.id){
                url = `${urlConfig.url}physicians/${body.physician.id}`;
                bearer = authorization.physicians;
                time = timeout.physicians;
                let physician = await axiosService.findRequest(url, bearer, time);
                
                if(physician.message){
                    physician.from = "physician";
                    throw physician;
                }else{
                    data.physician = physician;
                }
            }

            if(body.patient.id){
                url = `${urlConfig.url}patients/${body.patient.id}`;
                bearer = authorization.patients;
                time = timeout.patients;
                let patient = await axiosService.findRequest(url, bearer, time);
                
                if(patient.message){
                    patient.from = "patient";
                    throw patient;
                }else{
                    data.patient = patient;
                }
            }
            data.text = body.text;
            return dto.prescriptionDto(data);
        } catch (error) {
            throw error
        }
    },

    async saveMetric(body, t1){
        try {
            let dtoMetric = metricDto.metric(body)
            let url =  `${urlConfig.url}metrics`;
            return await axiosService.saveMetric(dtoMetric, url, authorization.metrics, timeout.metrics);
            } catch (error) {
                throw error
        }
    },

    async savePrescription(body){
        let t1 = await connection.sequelize().transaction({autocommit: false});
        try {
            let { clinic, patient, physician, text} = body;
            if( !clinic.id || !patient.id || !physician.id || !text )
                throw "Todos os campos são obrigatórios";
            
            let data = await this.find(body);
            let prescriptionSaved = await dao.save(data, t1);
            await this.saveMetric(data, t1);

            t1.commit();
            return prescriptionSaved
        } catch (error) {
            t1.rollback();
            throw error
        }
    },

    async getPrescription(id, page){
        try {
            let where = {};
            if(id)
                where = { prescriptionId: id };

            if(isNaN(page)){
                let error = "paginação é um item obrigatório e deve ser numérico"
                console.log(error);
                throw error;
            }

            let offset = page * limit;
            return await dao.find(where, offset);
        } catch (error) {
            throw error
        }
    }
}

