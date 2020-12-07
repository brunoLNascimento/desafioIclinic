const service = require('../service/service')
const dtoError = require('../dto/error_dto')
const { utilFrom } = require('../util/util')

module.exports.find = async function(req, res){
    try {
        let id = (req.params.id) ? req.params.id : '';
        let foundClinic = await service.find(utilFrom.clinic, id);
        return res.status(foundClinic.status).json(foundClinic.data)
    } catch (error) {
        if(error.response){
            let status = error.response.status;
            let returnDto = dtoError.error(error, utilFrom.clinic);
            return res.status(status).send(returnDto);
        }else{
            let returnDto = dtoError.error(error);
            return res.status(500).send(returnDto);
        }
    }
}