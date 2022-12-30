import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-navbar',
  templateUrl: './a-navbar.component.html',
  styleUrls: ['./a-navbar.component.css']
})
export class ANavbarComponent implements OnInit {

  signOutClick : any = false;

  onClick(event : any)
  {
    event.stopPropagation();
    console.log(event);
    this.signOutClick = true;
  }

  
  offClick()
  {
    this.signOutClick = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
