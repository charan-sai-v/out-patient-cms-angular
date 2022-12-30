export class Doctor
{
    id?: any
    firstName?: any
    lastName?: any
    gender?: any
    email?: any
    specialist?: any
}

export class Appointment{
    patientId?: number
    patientName?: String
    doctorId?: number
    doctorName?: String

    setPatientId(patientId?: number){
        this.patientId = patientId
    }

    getPatientId(){
        return this.patientId
    }

    setDoctorId(doctorId?: number){
        this.doctorId = doctorId
    }

    getDoctorId(){
        return this.doctorId
    }

    setDoctorName(doctorName?: String){
        this.doctorName = doctorName
    }

    getDoctorName(){
        return this.doctorName
    }
}