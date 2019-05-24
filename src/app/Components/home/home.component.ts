import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselOptions = {
    margin: 25,
    nav: true,
      autoplay:true,
      autoplayTimeout:100000,
      items:1,
      loop:true,
      slideTransition:'linear',
      dots:false,
      autoplayHoverPause:true,
      autoplaySpeed:20000,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
     
      },
      600: {
        items: 1,
        nav: true,
  
      },
      1000: {
        items: 1,
        nav: true,
        loop: false
      },
      // 1500: {
      //   items: 1,
      //   nav: true,
      //   loop: false
      // }
    }
  }
 
  images = [
    {
      text: "An amazing collection for the holy season for Men",
      image: "assets/img/product/hmgoepprod.png",
      btnText:"Men's Collection",
      h1Text1:"MEN'S",
      h1Text2: "COLLECTION"
    },
    {
      text: "An amazing collection for the holy season for Women",
      image: "assets/img/product/hmgoepprod.png",
      btnText:"Women's Collection",
      h1Text1:"WOMEN'S",
      h1Text2: "COLLECTION"
    },
    {
      text: "An amazing collection for the holy season for Kids",
      image: "assets/img/product/hmgoepprod.png",
      btnText:"Kids Collection",
      h1Text1:"KIDS",
      h1Text2: "COLLECTION"
    }
  ]
 
 

  constructor() {
    
   }

  ngOnInit() {
    
  }

}
