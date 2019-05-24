import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent implements OnInit {
  gallery:any[]=[
    "assets/img/product/Group 1.svg",
    "assets/img/product/Group 3.svg",
    "assets/img/product/Group 4.svg",
    "assets/img/product/Group 5.svg",
    "assets/img/product/Group 6.svg",
    "assets/img/product/Group 7.svg",
    "assets/img/product/Group 8.svg",
    "assets/img/product/Group 9.svg",
    "assets/img/product/Group 2.svg"
  ]
  constructor() { }

  ngOnInit() {
  }

}
