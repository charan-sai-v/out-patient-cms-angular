import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorLoginService } from './doctor-login.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  data: any
  msg: any;

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router: Router, private doctorService: DoctorLoginService) { }

  ngOnInit()
  {
  
  }

  login()
  {
    this.data = this.form.value
    this.doctorService.login(this.data)
    .subscribe({
      next: (data) => {
        if(data['success']=='true')
        {
          localStorage.setItem('email',this.data.email) 
          localStorage.setItem('role', 'doctor');
          this.msg = 'Successfully Login'
          
          setTimeout(()=>{            
           this.router.navigate(['doctor'])
        }, 3000);
        }
        else{
          this.msg = 'Invalid Credentials'
        }
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
