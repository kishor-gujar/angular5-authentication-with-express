import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {  } from '@angular/forms/src/model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  email: FormControl
  emailErrorMessage: Array<string>
  passwordErrorMessage: string

  constructor(private loginFormBuilder: FormBuilder) { 
    this.initializeErrorMessages();
    this.loginForm = loginFormBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])  
    })
  }
  ngOnInit() {
  }

  initializeErrorMessages() {
    this.emailErrorMessage= ["Email is required.","Email is not valid"];

    this.passwordErrorMessage= "Password is required";
  }
  onSubmit(loginForm){
    console.log(loginForm.value);
  }
}
