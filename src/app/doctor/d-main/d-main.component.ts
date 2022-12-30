import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-main',
  templateUrl: './d-main.component.html',
  styleUrls: ['./d-main.component.css']
})
export class DMainComponent implements OnInit {

  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Account A'
    },
    {
      data: [120, 455, 100, 340],
      label: 'Account B'
    },
    {
      data: [45, 67, 800, 500],
      label: 'Account C'
    }
  ];

  chartLabels = [
    'January',
    'February',
    'March',
    'April'
  ];

  chartOptions = {
    responsive: true
  };


  constructor() { }

  ngOnInit(): void {
  }

}
