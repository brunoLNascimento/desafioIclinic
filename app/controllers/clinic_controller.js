const service = require('../service/service')
const montaDto = require('../dto/monta_dto')
const { utilFrom } = require('../util/util')

module.exports.find = async function(req, res){
    try {
        let id = (req.params.id) ? req.params.id : '';
        let foundClinic = await service.find(utilFrom.clinic, id);
        return res.status(foundClinic.status).json(foundClinic.data)
    } catch (error) {
        if(error.response){
            let status = error.response.status;
            let returnDto = montaDto.error(error, utilFrom.clinic);
            return res.status(status).send(returnDto);
        }else{
            let returnDto = montaDto.error(error);
            return res.status(500).send(returnDto);
        }
    }
}