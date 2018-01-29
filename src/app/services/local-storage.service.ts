import { Injectable } from '@angular/core';
import { TokenParams } from '../classes/token-params';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public SetAuthorizationData(auth: TokenParams): void{
    localStorage.setItem('Authorization', JSON.stringify(auth));
  }

  public CheckAuthorizationData(){
    if(!this.GetAuthorizationData()){
      return false;
    } else {
      return true;
    }
  }

  public GetAuthorizationData():TokenParams{
    let tokendata = JSON.parse(localStorage.getItem('Authorization'));
    return tokendata = null ? null:tokendata;
  }

  public removeAuthrizationData(){
    localStorage.removeItem('Authorization');
  }

}
