

module.exports.save = async function(req, res){
    try {
        console.log("Teste")
        return res.status(200).send("foi")
    } catch (error) {

        return res.status(status).send("Erro ")
    }
} 