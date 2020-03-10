import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/web.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  getCategoryArray = [];
  getProductArray = [];
  quantity: number;
  constructor(private api: WebService) { }

  ngOnInit() {
    this.getCategory();
    this.getProduct();
  }
  getCategory() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
      // console.log(this.getCategoryArray);
    })
  }

  getProduct(){
    this.api.getProduct().subscribe((res) => {
      this.getProductArray = res as [];
      console.log(this.getProductArray);
      this.quantity = this.getProductArray.length;
    })
  }

}
