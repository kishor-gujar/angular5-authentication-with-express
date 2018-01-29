import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private authservice: AuthService){}

  ngOnInit() {
    // this.isLoggedin();
  }

  private isLoggedin(): boolean {
    if(this.authservice.isLoggedIn()){
      return true;
    } else {
      return false;
    }
  }
}
