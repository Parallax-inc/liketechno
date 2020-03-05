import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators'
import { tokenNotExpired } from 'angular2-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;
  usersarray: any;
  logined: boolean;
  constructor(private http: Http) { }

  authUser(users){
    let headers = new Headers();
    return this.http.post('http://188.40.170.11:3002/api/auth', 
    users, 
    {headers: headers}).pipe(map((response: any) => response.json()));
  }
  storeUser(token, users){
    localStorage.setItem('token', token);
    localStorage.setItem('users', JSON.stringify(users));
    this.token = token;
    this.usersarray = users;
  }
  logout(){
    this.token = null;
    this.usersarray = null;
    localStorage.clear();
  }
  isLoggedIn(){
    return tokenNotExpired();
  }
}
