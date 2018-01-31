import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../classes/profile';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
