import { Component, OnInit } from '@angular/core';
import { IsLoggedIn } from '../auth/isLogged.guard';
import { AccountComponent } from '../pages/account/account.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hideMenu: boolean = false;
  logined: boolean;
  x: number = 1;
  constructor(private autorized: IsLoggedIn) { }

  ngOnInit() {
    this.auditLoginUser();
    // setInterval(() => {
    //   this.auditLoginUser();
    //   this.x++
    //   console.log(this.x);
      
    // }, 1000);
  }

  public auditLoginUser() {
    this.logined = this.autorized.canActivate();
    console.log(this.logined);

  }




showMenu() {
  if (this.hideMenu) {
    this.hideMenu = false;
  } else {
    this.hideMenu = true;
  }
}
}
