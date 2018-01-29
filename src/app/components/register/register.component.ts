import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserRegister } from '../../models/userRegister';

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

  constructor(private registerFormBuilder: FormBuilder, private authService: AuthService) { 
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
    var user = new UserRegister()
    user.firstname = registerForm.value.firstname;
    user.email = registerForm.value.email;
    user.password = registerForm.value.password;
    this.authService.register(user);
  }

}
