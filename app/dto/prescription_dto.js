const { debugPort } = require("process");

module.exports = {
    prescriptionDto(body){
        let dto = { 
            clinicId : body.clinic.id, 
            clinicName : body.clinic.name, 
            patientId : body.patient.id,
            patientName : body.patient.name, 
            patientEmail : body.patient.email, 
            patientPhone : body.patient.phone, 
            physicianId : body.physician.id,
            physicianCrm : body.physician.crm, 
            physicianName : body.physician.name,
            text : body.text, 
        }
        return dto;
    },

    responseDto(dto){
        let data = {
            data: {
                id: dto.prescriptionId,
                clinic: {
                    id: dto.clinicId,
                },
                physician: {
                    id: dto.physicianId,
                },
                patient: {
                    id: dto.patientId,
                },
                text: dto.text
            }
        }
        return data;
    }
}