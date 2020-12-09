const app = require('../server');
const request = require('supertest');
const connection = require('../app/config/sequelize');

const savePrescription = {
    "clinic": { "id": 1 },
    "physician": { "id": 1 },
    "patient": { "id": 1 },
    "text": "Dipirona 1x ao dia"
}

const physicianSemId = {
    "clinic": { "id": 1 },
    "patient": { "id": 1 },
    "text": "Dipirona 1x ao dia"
}

describe('Testando api de prescrição', () => {
    setTimeout( timeout, 5000);

    it('#Salvando prescrição', done => {
        request(app)
            .post('/v2/prescriptions')
            .send(savePrescription)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    });

    it('#Prescrição sem id PHYSICIAN', done => {
        request(app)
            .post('/v2/prescriptions')
            .send(physicianSemId)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(500)
            .end(done)
    });

});

function timeout(time){
    process.exit(time);
}
