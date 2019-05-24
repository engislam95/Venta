import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayNone(){
  document.querySelector('.icon').setAttribute('style',' display: none !important;')
  document.querySelector('.over-lay').setAttribute('style',' display: none;')
  // document.querySelector('.video').setAttribute('autoplay','true')
  }
  
  
}
