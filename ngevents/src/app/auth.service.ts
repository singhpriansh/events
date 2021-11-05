import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export interface User {
  email: String,
  password: String
}

const BACK_URL = environment.apiUrls
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _registrationUrl = BACK_URL+ "register";
  private _loginUrl = BACK_URL + "login";
  constructor(private http: HttpClient,
    private _router: Router ) { }

  registerUser(user: User) {
    this.http.post<any>(this._registrationUrl, user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',res.token)
          this._router.navigate(['special'])
        },
        err => console.log(err)
      );
  }

  loginUser(user: User){
    this.http.post<any>(this._loginUrl, user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token',res.token)
          this._router.navigate(['special'])
        },
        err => console.log(err)
      );
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken(){
    return localStorage.getItem('token')
  }

}
