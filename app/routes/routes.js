const clinic = require('../controllers/clinic_controller');
const physician  = require('../controllers/physician_controller');
const patient  = require('../controllers/patient_controller');
const prescriptions = require('../controllers/prescription_controller');


module.exports = function(server) {
	//serviços dependentes 	
	server.get('/clinic/:id?', clinic.find);
	server.get('/physician/:id?', physician.find);
	server.get('/patient/:id?', patient.find);
	
	//salva prescrição na base
	server.post('/v2/prescriptions', prescriptions.savePrescription);
	
	//busca prescrição na base
	server.get('/v2/prescriptions/:id?', prescriptions.getPrescription);
}