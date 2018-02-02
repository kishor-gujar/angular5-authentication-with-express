import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../classes/profile';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public profile: Profile;
  public errorMsg: string;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.get().subscribe(
      data => this.profile = data,
      error => this.errorMsg = error
    );
  }

}
