import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/web.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  getCategoryArray = [];
  constructor(private api: WebService) { }

  ngOnInit() {
    this.api.getCategory().subscribe((res) => {
      this.getCategoryArray = res as [];
    })
  }

}
