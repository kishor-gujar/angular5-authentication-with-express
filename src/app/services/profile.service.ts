import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenParams } from '../classes/token-params';
import { Profile } from '../classes/profile';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient ) {
   }

  private TokenApi = 'http://localhost:3000/api/dashboard';
 
  get() {
    return this.http.get<Profile>( this.TokenApi).subscribe(
        res => {
          
           // console.log(this.localStorageService.GetAuthorizationData().token);
            console.log(res);
        },
        err => {
            // console.log(err);
        }
    )

    }

}
