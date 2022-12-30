import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../Doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-d-schedules',
  templateUrl: './d-schedules.component.html',
  styleUrls: ['./d-schedules.component.css']
})
export class DSchedulesComponent implements OnInit {
  email:any
  doctor?: Doctor
  appointments:any
  rAppointments:any
  id:any

  appTime: any
  appEnds: any
  appDate: any
  isAppointed = false
  form = false

  constructor(private router: Router, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email')
    this.doctorService.getDoctorByEmail(this.email)
    .subscribe({
      next: (data) =>{
        this.doctor = data
        console.log(data)
      },
      error: (e) => {
        this.router.navigate(['doctor/login'])
        console.error(e)
      }
    })

    this.doctorService.viewSchedules(this.doctor?.id)
    .subscribe({
      next: (data) => {
        this.rAppointments = data
        console.log(data);
      },
      error: (e) => console.error(e)
    });



    this.doctorService.viewSchedules(this.doctor?.id)
    .subscribe({
      next: (data) => {
        this.appointments = data
        console.log(data);
      },
      error: (e) => console.error(e)
    });

    

  }

  accept(id: number){
    this.id = id
    this.form = true
  }

  add(){
  }





  

}
