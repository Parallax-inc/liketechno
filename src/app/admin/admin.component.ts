import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/shared/services/web.service';
import { Router, CanActivate } from '@angular/router'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminka: boolean = false
  catalogListShow: boolean = false;
  user;
  admin;
  constructor(private api: WebService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('users'));
    this.api.getUserByID(this.user.id).subscribe((res) => {
                this.admin = res as any[]
                if(this.admin.admin == 1){
                  this.adminka = true;
                  this.router.navigate(['admin']);
                  console.log('good')
                }
                else {
                    this.adminka = false;
                    this.router.navigate(['main']);
                  console.log('no good')
                }
    })
  }
  catalogListOpen() {
    if (this.catalogListShow) {
      this.catalogListShow = false
    } else {
      this.catalogListShow = true;
    }
  }
}
