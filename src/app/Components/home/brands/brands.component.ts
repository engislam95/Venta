import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  carouselOptions = {
    autoplay:true,
    autoplayTimeout:1000,
    items:6,
    loop:true,
    margin:20,
    slideTransition:'linear',
    dots:false,
    autoplayHoverPause:true,
    autoplaySpeed:1000
  }
  brands:any[]=[
    "assets/img/Brands/2.png",
    "assets/img/Brands/1.png",
    "assets/img/Brands/4.jpg",
    "assets/img/Brands/2.png",
    "assets/img/Brands/7.png",
    "assets/img/Brands/8.jpg",
  ]
  constructor() { }

  ngOnInit() {
    // var owl = $('.owl-carousel');
    // owl.owlCarousel({
    // items:2,
    // loop:true,
    // margin:10,
    // autoplay:true,
    // autoplayTimeout:1000,
    // autoplayHoverPause:true
    // });
  }

}
