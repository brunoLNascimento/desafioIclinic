const service = require('../service/service')
const dtoError = require('../dto/error_dto')
const { utilFrom } = require('../util/util');

module.exports.find = async function(req, res){
    try {
        let id = (req.params.id) ? req.params.id : '';
        let foundpatient = await service.find(utilFrom.patient, id);
        return res.status(foundpatient.status).json(foundpatient.data)
    } catch (error) {
        if(error.response){
            let status = error.response.status;
            let returnDto = dtoError.error(error, utilFrom.patient);
            return res.status(status).send(returnDto);
        }else{
            let returnDto = dtoError.error(error);
            return res.status(500).send(returnDto);
        }
    }
}