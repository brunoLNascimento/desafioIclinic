const service = require('../service/service');

module.exports.savePrescription = async function(req, res){
    try {
        let body = req.body;
        let saved = await service.savePrescription(body);
        return res.status(200).send(saved);
    } catch (error) {
        return res.status(400).send(error.message)
    }
}