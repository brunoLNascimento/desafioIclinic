const service = require('../service/service');
const montaDto = require('../dto/monta_dto')
const { responseDto } = require('../dto/prescription_dto')

module.exports.savePrescription = async function(req, res){
    try {
        let body = req.body;
        let saved = await service.savePrescription(body);
        return res.status(200).send(responseDto(saved));
    } catch (error) {
        if(error.response){
            let status = error.response.status;
            let returnDto = montaDto.error(error, error.from);
            return res.status(status).send(returnDto);
        }else{
            let returnDto = montaDto.error(error);
            return res.status(500).send(returnDto);
        }
    }
}