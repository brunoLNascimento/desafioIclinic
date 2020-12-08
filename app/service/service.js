const { authorization, timeout, urlConfig } = require('../config/urlConfig');
const axiosService = require('../request/axios_service');
const { utilFrom } = require('../util/util');
const dao = require("../dao/prescription_dao")
const dto = require('../dto/prescription_dto')

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
            //preciso seprar as chamadas e montar um schema para salvar os dados
            let { clinic, patient, physician, text} = body;
            if( !clinic.id || !patient.id || !physician.id || !text ){
                throw "Todos os campos são obrigatórios";
            }
            let data = await this.find(body);
            console.log(data)
            return await dao.save(data)
            

        } catch (error) {
            throw error
        }
    }
}

