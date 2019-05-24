import { Component, OnInit } from '@angular/core';
import { AddProductService } from 'src/app/shared/dashboard/add-product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  constructor(  private addProductService:AddProductService,
                private route:ActivatedRoute ) { }
  ngOnInit() {
  }

}
