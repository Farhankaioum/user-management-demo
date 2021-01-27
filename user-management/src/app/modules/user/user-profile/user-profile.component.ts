import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Gender } from '../../../_models/gender';
import { User } from '../../../_models/user';
import { AlertifyService } from '../../../_services/alertify.service';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('memberTabs', { static: true }) memberTabs: TabsetComponent;
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  user: User;
  dateOfBirth: Date;
  
  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.user = data.user;
      this.dateOfBirth = new Date(this.user.dateOfBirth);
    });

    this.route.queryParams.subscribe(params => {
      const selectedTab = params.tab;
      this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
    });
  }

  updateUser(){
    this.userService.updateUser(this.user)
      .subscribe((next) => {
        this.alertify.success('Profile updated successfully');
      }, error => {
        this.alertify.error(error);
      });
  }

  selectTab(tabId: number) {
    this.memberTabs.tabs[tabId].active = true;
  }

  getGenderName(gender: Gender){
    return gender === Gender.Male ? 'Male' : gender === Gender.Female ? 'Female' : 'Unknown';
  }

}
