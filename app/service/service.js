const { authorization, timeout, urlConfig } = require('../config/urlConfig');
const { findRequest } = require('../request/axios_service');
const axiosService = require('../request/axios_service');
const { utilFrom } = require('../util/util');

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
    }
}

