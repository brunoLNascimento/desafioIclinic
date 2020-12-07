const clinic = require('../controllers/clinic_controller');
const physician  = require('../controllers/physician_controller');
const patient  = require('../controllers/patient_controller');


module.exports = function(server) {	
	server.get('/clinic/:id?', clinic.find);
	server.get('/physician/:id?', physician.find);
	server.get('/patient/:id?', patient.find);



}