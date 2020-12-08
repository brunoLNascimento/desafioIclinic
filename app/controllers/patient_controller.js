const service = require('../service/service')
const montaDto = require('../dto/monta_dto')
const { utilFrom } = require('../util/util');

module.exports.find = async function(req, res){
    try {
        let id = (req.params.id) ? req.params.id : '';
        let foundpatient = await service.find(utilFrom.patient, id);
        return res.status(foundpatient.status).json(foundpatient.data)
    } catch (error) {
        if(error.response){
            let status = error.response.status;
            let returnDto = montaDto.error(error, utilFrom.patient);
            return res.status(status).send(returnDto);
        }else{
            let returnDto = montaDto.error(error);
            return res.status(500).send(returnDto);
        }
    }
}