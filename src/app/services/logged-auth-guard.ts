import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';


@Injectable()
export class LoggedAuthGuard implements CanActivate {
  public redirectUrl: string;

  constructor(private router: Router,private localStorageService: LocalStorageService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this.redirectUrl = state.url;
    return this.checkLogin(this.redirectUrl);
  }

  checkLogin(url: string):boolean{
    if(this.localStorageService.CheckAuthorizationData()){
      this.router.navigateByUrl('/home');
      return false;
    } else{
      return true;
    }
  }

}
