import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  username: string;
  errorMsg: string;

  constructor(private authservice: AuthService, private profileService: ProfileService){}

  ngOnInit() {
    if(this.authservice.isLoggedIn){
      this.profileService.get().subscribe(
        data => this.username = data.firstname,
        error => this.errorMsg = error
      )
    }
  }

  public isLoggedin(): boolean {
    if(this.authservice.isLoggedIn()){
      return true;
    } else {
      return false;
    }
  }
}
