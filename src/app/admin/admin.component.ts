import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  catalogListShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  catalogListOpen() {
    if (this.catalogListShow) {
      this.catalogListShow = false
    } else {
      this.catalogListShow = true;
    }
  }
}
