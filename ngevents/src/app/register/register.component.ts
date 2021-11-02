import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {


  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  registerUser(registerUserData: NgForm){
    const value = {
      email: registerUserData.value.email,
      password: registerUserData.value.password
    }
    this._auth.registerUser(value);
  }

}
