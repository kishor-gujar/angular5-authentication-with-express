import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { TokenParams } from '../classes/token-params';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  AccessToken: String = "";
  
  constructor(private router: Router, private http: HttpClient,  private localStorageService: LocalStorageService  ) {
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
            } 
           // console.log(this.localStorageService.GetAuthorizationData().token);
            // console.log(res);
        }, 
        err => {
            console.log("err" + err);
        })

    }

    register(){
        var data = {
            // email : email, 
            // password: password
        }
        return this.http.post<TokenParams>( this.TokenApi, data).subscribe(
            res => {
                if(res.success == true){
                    this.localStorageService.SetAuthorizationData(res);
                    this.router.navigateByUrl('/login');
                } 
               // console.log(this.localStorageService.GetAuthorizationData().token);
                // console.log(res);
            }, 
            err => {
                console.log("err" + err);
            })
    
        }
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