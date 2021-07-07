import { Component, OnInit } from '@angular/core';
import { IsLoggedIn } from '../auth/isLogged.guard';
import { AccountComponent } from '../pages/account/account.component';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hideMenu: boolean = false;


  constructor(private autorized: IsLoggedIn, private authe: AuthService) { }

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
