module.exports = {
    metric(body){
        let dto = { 
            clinic_id: body.clinicId,
            physician_id: body.physicianId, 
            physician_name: body.physicianName, 
            physician_crm: body.physicianCrm, 
            patient_id: body.patientId, 
            patient_name: body.patientName, 
            patient_email: body.patientEmail, 
            patient_phone: body.patientPhone, 
        }
        return dto;
    }
}