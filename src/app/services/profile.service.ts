import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../classes/profile';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class ProfileService {
    profile: Profile;
  constructor(private http: HttpClient ) {}

  private TokenApi = 'http://localhost:3000/api/profile';
 
  get(): Observable<Profile>{
        return this.http.get<Profile>( this.TokenApi).catch(this.errorHandler);
    }
    errorHandler(error: HttpErrorResponse){
        return Observable.throw(error.message || "Server Error");
    }
}
