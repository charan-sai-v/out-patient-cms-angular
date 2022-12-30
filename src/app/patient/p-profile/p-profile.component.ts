import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-p-profile',
  templateUrl: './p-profile.component.html',
  styleUrls: ['./p-profile.component.css']
})
export class PProfileComponent implements OnInit {

  constructor(http : HttpClient) 
  {
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(Response => {
      console.log(Response);
    }) 

  }

  ngOnInit(): void {
  }

}
