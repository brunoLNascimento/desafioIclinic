const { authorization, timeout, urlConfig } = require('../config/urlConfig');
const axiosService = require('../request/axios_service');
const { utilFrom } = require('../util/util');
const dao = require("../dao/prescription_dao")

module.exports = {
    async find(from, id){
        try {
            let url = '';
            let bearer = '';
            let time = '';

            switch(from){
                case utilFrom.clinic: 
                    url = `${urlConfig.url}clinics/${id}`;
                    bearer = authorization.clinics;
                    time = timeout.clinics;
                    break
                case utilFrom.physician:
                    url = `${urlConfig.url}physicians/${id}`;
                    bearer = authorization.physicians;
                    time = timeout.physicians;
                    break
                case utilFrom.patient:
                    url = `${urlConfig.url}patients/${id}`;
                    bearer = authorization.patients;
                    time = timeout.patients;
                    break
            }

            return await axiosService.findRequest(url, bearer, time)
        } catch (error) {
            throw error
        }
    },

    async saveMetric(body){
        try {
            let { clinic_id, clinic_name, physician_id, physician_name, physician_crm, patient_id, patient_name, patient_email, patient_phone } = body;
            
            if(!clinic_id || !physician_id || !physician_name || !physician_crm || !patient_id || !patient_name || !patient_email || !patient_phone){
                let err = 'Verifique os campos. Apenas o nome da clinica não é obrigatório!';
                console.log(err)
                throw err
            }

            let url =  `${urlConfig.url}metrics`;
            return await axiosService.saveMetric(body, url, authorization.metrics, timeout.metrics);
            } catch (error) {
                throw error
        }
    },

    async savePrescription(body){
        try {
            let { clinic_id, patient_id, physician_id, prescription} = body;
            if( !clinic_id || !patient_id || !physician_id || !prescription ){
                throw "Todos os campos são obrigatórios";
            }

            return await dao.save(body)
            

        } catch (error) {
            throw error
        }
    }
}

