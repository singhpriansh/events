import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  loginUser(loginUserData: NgForm){
    const value = {
      email: loginUserData.value.email,
      password: loginUserData.value.password
    }
    this._auth.loginUser(value);
  }

}
