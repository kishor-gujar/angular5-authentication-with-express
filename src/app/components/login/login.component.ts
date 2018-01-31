import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { TokenParams } from '../../classes/token-params';
import { AuthService } from '../../services/auth.service';


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
  tokenParams: TokenParams
  auth: AuthService;
  redirectUrl: string;

  constructor(
    private loginFormBuilder: FormBuilder, 
    private router:Router,
    private authService: AuthService,
    private route: ActivatedRoute) {

    this.initializeErrorMessages();
    this.loginForm = loginFormBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])  
    })
    this.auth = authService;    
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.redirectUrl = params.ret;
      });
  }

  initializeErrorMessages() {
    this.emailErrorMessage= ["Email is required.","Email is not valid"];

    this.passwordErrorMessage= "Password is required";
  }
  onSubmit(loginForm){
    // console.log(this.redirectUrl); 
    this.auth.login(loginForm.value.email, loginForm.value.password, this.redirectUrl);
  }
}
