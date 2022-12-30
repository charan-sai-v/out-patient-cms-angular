import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  data: any;
  msg: any;
  Invalid?: boolean

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private route : ActivatedRoute, private patientService: LoginServiceService, private router: Router) { }

  ngOnInit()
  {
    
  }

  login():void
  {
    this.data = this.form.value
    this.patientService.patientLogin(this.data)
    .subscribe({
      next: (data) => {
        if(data['success']=='true')
        {
          localStorage.setItem('email',this.data.email) 
          localStorage.setItem('role', 'patient');
          this.Invalid = false
        this.router.navigate(['patient'])
        }else{
          this.Invalid = true
        }
        
        console.log(data);
      },
      error: (e) =>{
        this.Invalid = false
       console.error(e) 
      } 
    });
  }

}
