import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { TokenParams } from '../classes/token-params';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { UserRegister } from '../models/userRegister';
import { UserRegister as UserRegisterclass } from '../classes/user-register';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthService {

  AccessToken: String = "";
  
  constructor(
      private router: Router, 
      private http: HttpClient,  
      private localStorageService: LocalStorageService,
      public snackBar: MatSnackBar) {
   }

  private TokenApi = 'http://localhost:3000/api/authenticate';
 
  login(email: string, password: string) {
    var data = {
        email : email, 
        password: password
    }
    return this.http.post<TokenParams>( this.TokenApi, data).subscribe(
        res => {
            if(res.success == true){
                this.localStorageService.SetAuthorizationData(res);
                this.router.navigateByUrl('/home');
                this.snackBar.open("You are logged in.", "Got it", {
                    duration: 500,
                  });
            } 
           // console.log(this.localStorageService.GetAuthorizationData().token);
            // console.log(res);
        }, 
        err => {
            console.log(err);
        })

    }

    register(userRegister){
        return this.http.post<UserRegisterclass>('http://localhost:3000/api/register', userRegister).subscribe(
            res => {
                if(res.success == true){
                    this.router.navigateByUrl('/login');
                }
                console.log(res);
            },
            err => {
                console.log(err);
            }
        )
    }

    isLoggedIn(): boolean{
        if(this.localStorageService.CheckAuthorizationData()){
            return true;
        }
        return false;
    }

    logout() {
        // remove user from local storage to log user out
        this.localStorageService.removeAuthrizationData();
        
    }
}