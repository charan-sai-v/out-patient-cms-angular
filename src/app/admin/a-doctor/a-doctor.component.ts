import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ADServiceService } from './a-d-service.service';

@Component({
  selector: 'app-a-doctor',
  templateUrl: './a-doctor.component.html',
  styleUrls: ['./a-doctor.component.css']
})
export class ADoctorComponent implements OnInit {
  searchText:any
  doctors?:any;
  deleted?: boolean
  edited: any

  constructor(private doctorService : ADServiceService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.doctorService.getAll().subscribe(response => {
      this.doctors = response;
    })
  }

  delete(id: any): void
  {
    this.doctorService.delete(id)
    .subscribe({
      next: (res) => {
          window.location.reload()
          this.deleted = true
          
       console.log(res);
        
       
        
      },
      error: (e) => console.error(e)
    });
    
  }

  



}
