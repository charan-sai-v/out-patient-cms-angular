import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin';
import { AdminService } from './a-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  msg: any;
  admin ?: Admin

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  

  constructor(private route : ActivatedRoute, private router : Router, private http : HttpClient, private adminService: AdminService) { }

  login()
  {
    let value = this.form.value
    this.adminService.login(value)
    .subscribe(response => {
      console.log(response)
      if(response['success']=='true')
      {
        this.msg = 'Loggined Successfull'
        setTimeout(()=>{
          this.router.navigate(['admin/doctors'])
        }, 2000);
      }
      else{
        console.log('login failed')
        this.msg = 'Invalid';
      }
        
    },
    error => console.log(error)
    )  
  }
  

  ngOnInit()
  {
    this.route.queryParamMap.subscribe();
    
  }

}
