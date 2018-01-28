import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  firstNameErrorMessage: Array<string>
  emailErrorMessage: Array<string>
  passwordErrorMessage: Array<string>

  constructor(private registerFormBuilder: FormBuilder) { 
    this.initializeErrorMessages();
    this.registerForm = registerFormBuilder.group({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])  
    })
  }
  ngOnInit() {
  }

  initializeErrorMessages() {
    this.firstNameErrorMessage= ["First Name is required","FirstName at least 2 laters"];

    this.emailErrorMessage= ["Email is required.","Email is not valid"];

    this.passwordErrorMessage= ["Password is required", "Password must be 8 charecters"];
  }
  onSubmit(registerForm){
    console.log(registerForm.value);
  }

}
