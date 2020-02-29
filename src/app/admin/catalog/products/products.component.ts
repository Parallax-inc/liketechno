import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/web.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  getCategoryArray = [];
  constructor(private api: WebService) { }

  ngOnInit() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
      // console.log(this.getCategoryArray);
    }) 
  }

}
