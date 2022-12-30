import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ADServiceService } from '../a-doctor/a-d-service.service';

@Component({
  selector: 'app-a-d-add',
  templateUrl: './a-d-add.component.html',
  styleUrls: ['./a-d-add.component.css']
})
export class ADAddComponent implements OnInit {
  
 msg: any
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    specialist: new FormControl('', [Validators.required]),
  })
  constructor(private doctorService : ADServiceService) { }

  signup()
  {
    let value = this.form.value
    this.doctorService.add(value)
    .subscribe({
      next: (res) => {
        if(res['success']=='true')
        {
          window.location.reload()
          this.msg = "Add Successfully"
        }
        else{
          this.msg = "Something went wrong"
        }
        console.log(res);
        
      },
      error: (e) => console.error(e)
    });
    
  }

  ngOnInit(): void {
  }

}
