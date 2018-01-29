import { Injectable } from '@angular/core';
import { TokenParams } from '../classes/token-params';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public SetAuthorizationData(auth: TokenParams): void{
    localStorage.setItem('Authorization', JSON.stringify(auth));
  }

  public GetAuthorizationData():TokenParams{
    let tokendata = JSON.parse(localStorage.getItem('Authorization'));
    return tokendata = null ? null:tokendata;
  }

}
