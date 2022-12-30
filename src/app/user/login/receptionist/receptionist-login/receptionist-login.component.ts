import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReceptionServiceService } from '../reception-service.service';

@Component({
  selector: 'app-receptionist-login',
  templateUrl: './receptionist-login.component.html',
  styleUrls: ['./receptionist-login.component.css']
})
export class ReceptionistLoginComponent implements OnInit {

  invalid = false
  data:any

  form = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private router: Router, private receptionistService: ReceptionServiceService ) { }

  ngOnInit(): void {
  }
  login()
  {
    this.data = this.form.value
    this.receptionistService.login(this.data)
    .subscribe(
      (res)=>{
        console.log(res);
        if(res['success']=='true')
        {
          this.router.navigate(['receptionist'])
        }
        else{
          this.invalid = true
        }
      })
  }

}
