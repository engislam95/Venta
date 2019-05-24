import { Component, OnInit } from '@angular/core';
import { AddProductService } from 'src/app/shared/dashboard/add-product.service';

@Component({
  selector: 'app-lay-out',
  templateUrl: './lay-out.component.html',
  styleUrls: ['./lay-out.component.scss']
})
export class LayOutComponent implements OnInit {
  items:any[]=[
  {
    tite:'Add Products',
    src:'assets/img/Dashboard/product.svg',
    link:'add-product'
  },
  {
    tite:'Settings',
    src:'assets/img/Dashboard/settings.svg',
    link:'settings'
  },
  {
    tite:'Orders',
    src:'assets/img/Dashboard/shopping-bag.svg',
    link:'orders'
  },
  {
    tite:'Terms & Conditions',
    src:'assets/img/Dashboard/term.svg',
    link:'terms'
  },
  {
    tite:'Log Out',
    src:'assets/img/Dashboard/logout.svg',
    link:'Log Out'
  },
]
  constructor( private addProductService:AddProductService) { }

  ngOnInit() {
  }
  changeColor(eleFromHtml){
    // let elementsIcon=document.querySelectorAll('.icon')
    // elementsIcon.forEach(element=>{
    //   if(element==eleFromHtml) return eleFromHtml.classList.add('active')
    //   else return eleFromHtml.classList.remove('active')
    // })
    console.log(eleFromHtml)
  }
}
