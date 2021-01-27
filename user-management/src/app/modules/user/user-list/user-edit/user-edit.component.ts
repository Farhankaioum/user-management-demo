import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../../../_models/role';
import { User } from '../../../../_models/user';
import { AlertifyService } from '../../../../_services/alertify.service';
import { UserService } from '../../../../_services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  editUser = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl('')
  });

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
     this.user = data.user;
    });

    this.editUser = new FormGroup({
      id: new FormControl(this.user.id),
      role: new FormControl(this.getRoleValue(this.user.role)),
      firstName: new FormControl(this.user.firstName),
      lastName: new FormControl(this.user.lastName),
      email: new FormControl(this.user.email)
    });
  }

  updateUser(){
    var user = this.editUser.value;
    user.role = this.getRole(this.role);
    this.userService.updateUser(user).subscribe(data => {
      this.alertify.success('User update successfull!');
      this.router.navigate(['/user/users']);
    }, error => {
      this.alertify.error('Error occured when update this user!');
    });
  }

  getRoleValue(role: Role){
    return role === Role.Admin ? 'admin' : 'user';
  }

  getRole(role: string){
    return role === 'user' ? Role.User : Role.Admin;
  }

  get role(): string{
    return this.editUser.get('role').value;
  }

}
