import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebService } from 'src/app/shared/services/web.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  formData: any;
  login: string;
  userPass: string;
  constructor(private api: WebService, private authe: AuthService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.formData = {
      _id: null,
      email: '',
      password: '',
      confirm: ''
    }
  }
  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    if (this.formData.password == this.formData.confirm) {
      this.api.creatingUsers(data).subscribe((res: any) => { }, (err: any) => { console.log(err); })
    }
    this.resetForm();
    delete data.id;
  }
  auth(){
    const user = {
      email: this.login,
      pass: this.userPass
    };
    this.authe.authUser(user).subscribe(res => {
      if (!res.success) {
        console.log('no')
      }
      else{
        console.log('no else');
        this.router.navigate(['/main'])
        this.authe.storeUser(res.token, res.users);
      }
    });
  }
}
