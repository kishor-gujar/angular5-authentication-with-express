import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { TokenParams } from '../classes/token-params';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthService {

  AccessToken: String = "";
  
  constructor(private http: HttpClient,  private localStorageService: LocalStorageService  ) {
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
            } 
           // console.log(this.localStorageService.GetAuthorizationData().token);
            // console.log(res);
        }, 
        err => {
            console.log("err" + err);
        }
    )

    }

    logout() {
        // remove user from local storage to log user out
        this.localStorageService.removeAuthrizationData();
        
    }
}