import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PServicesService } from '../p-services.service';

@Component({
  selector: 'app-p-navbar',
  templateUrl: './p-navbar.component.html',
  styleUrls: ['./p-navbar.component.css']
})
export class PNavbarComponent implements OnInit {

  constructor(private patientService: PServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  signOut(){
    this.patientService.signOut()
    this.router.navigate(['patient/login'])
  }
}
