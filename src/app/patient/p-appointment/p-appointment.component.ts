import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PServicesService } from '../p-services.service';
import { Patient } from '../Patient';
import { Appointment, Doctor } from './Doctors';

@Component({
  selector: 'app-p-appointment',
  templateUrl: './p-appointment.component.html',
  styleUrls: ['./p-appointment.component.css']
})
export class PAppointmentComponent implements OnInit {
  searchText:any
  query:any
  doctors?: Doctor[]
  viewDoctors?: Doctor[]
  email:any
  patient?: Patient
  appointment?: Appointment
  success = false
  failed = true
  
  constructor(private patientService: PServicesService, private router: Router) { }

  ngOnInit(): void {   
    this.email = localStorage.getItem('email')
    this.patientService.getpatientData(this.email)
    .subscribe({
      next: (data) => {
        this.patient = data;
        
        console.log(data);
      },
      error: (e) => {
        this.router.navigate(['patient/login'])
        console.error(e)
      }
      
    }); 

    this.patientService.viewAllDoctor()
        .subscribe(
          (data)=>{
            this.doctors = data;
            console.log(data)
          }
        )

  }

  addAppointment(doctor: any){
    
    this.patient?.lastname;
    let addAppointment = {
      patientId: this.patient?.id,
      patientName: this.patient?.firstName,
      doctorId: doctor.id,
      doctorName: doctor.firstName
    }
    this.patientService.appointment(addAppointment)
    .subscribe({
      next: (data) => {
        if(data['success']=='true'){
          this.success = true
        }
        else{
          this.failed = true
        }
       
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  search():void
  {
    console.log(this.query)
    this.patientService.searchByDoctors(this.query)
    .subscribe(
      (res)=>{
        let doctor = res;
        this.doctors = doctor?.sort();

        console.log(res);
      })
  }

}
