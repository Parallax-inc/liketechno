import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hideMenu: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showMenu() {
    if (this.hideMenu) {
      this.hideMenu = false;
    } else {
      this.hideMenu = true;
    }
  }
}
