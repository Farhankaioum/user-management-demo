import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Role } from '../../../_models/role';
import { User } from '../../../_models/user';

import { UserService } from '../../../_services/user.service';
import { AuthService } from '../../../_services/auth.service';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  users: any;
  user: User;

  constructor(private userService: UserService,
              private alertity: AlertifyService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.initialLoad();
    this.setInfoIntoLocalStorage();
  }

  initialLoad(){

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      retrieve: true,
      searching: false,
      columnDefs: [{
        targets: 4,
        orderable: false
      }]
    };

    this.users = [];
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((data : User[])=>{
      var id = +localStorage.getItem('userId');
      this.users = data.filter(u => u.id !== id);
      this.dtTrigger.next();
  })
  }

  getRoleName(role: Role){
    return role === Role.Admin ? 'Admin' : 'User';
  }

  deleteUser(userId: number){
    if(confirm('Are you sure to delete??')){
      this.userService.deleteUser(userId).subscribe(data => {
        this.alertity.success('Delete user successfull!');
        this.getUsers();
      }, error => {
        this.alertity.error('Error occured ' + error);
      });
    }
    
  }

  setInfoIntoLocalStorage(){
    const token = localStorage.getItem('token');
    if(token !== ' '){
      if(token === 'admin'){
        this.authService.currentUserName = 'Admin';
      }
       else{
        this.authService.currentUserName = 'User';
      }
    }
  }

}
