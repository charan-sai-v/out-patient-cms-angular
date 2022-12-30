import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PServicesService } from '../p-services.service';
import { Patient } from '../Patient';

@Component({
  selector: 'app-p-add-appointment',
  templateUrl: './p-add-appointment.component.html',
  styleUrls: ['./p-add-appointment.component.css']
})
export class PAddAppointmentComponent implements OnInit {
  email:any
  patient?: Patient
  form = new FormGroup({
    appTime: new FormControl('', [Validators.required]),
    appDate: new FormControl('', [Validators.required]),
    doctorId: new FormControl('', [Validators.required]),
    doctorName: new FormControl('', [Validators.required])

  })

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
  }

  add():void{
    
  }
}
