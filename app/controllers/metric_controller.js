const service = require('../service/service')
const montaDto = require('../dto/monta_dto')
const { utilFrom } = require('../util/util')

module.exports.save = async function(req, res){
    try {
        let body = req.body;
        let data = await service.saveMetric(body);
        let retornDto = montaDto.buildRes(data, utilFrom.metric);
        return res.status(data.status).send(retornDto)
    } catch (error) {
        if(error.response){
            let status = error.response.status;
            let returnDto = montaDto.error(error, utilFrom.metric);
            return res.status(status).send(returnDto);
        }else{
            let returnDto = montaDto.error(error);
            return res.status(400).send(returnDto);
        }
    }
} 