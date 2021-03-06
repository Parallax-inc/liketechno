import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/web.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  getBrendsArray = [];
  getCategoryArray = [];
  getProductArray = [];
  constructor(private api: WebService) { }
 
  ngOnInit() {
    this.getBrends();
    this.getCategory();
    this.getProduct();
  }


  getBrends() {
    this.api.getBrends().subscribe((res) => {
      this.getBrendsArray = res as [];
    })
  }

  getCategory(){
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
    })
  }

  getProduct(){
    this.api.getProduct().subscribe((res) => {
      this.getProductArray = res as [];
      console.log(this.getProductArray);
    })
  }
}
