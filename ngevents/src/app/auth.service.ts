import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  constructor(private http: HttpClient ) { }

  registerUser(user: User) {
    this.http.post<any>(this._registrationUrl, user)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  loginUser(user: User){
    this.http.post<any>(this._loginUrl, user)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
