import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../../_models/role';
import { User } from '../../../_models/user';
import { AlertifyService } from '../../../_services/alertify.service';
import { AuthService } from '../../../_services/auth.service';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  users: User[];
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private alertify: AlertifyService) { }

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      this.users = data.users;
    });

    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(){
    this.user = Object.assign({}, this.loginForm.value);

    var existingUser = null;
    existingUser = this.users.filter(u => u.email === this.user.email &&
       u.password === this.user.password)[0];

    if(existingUser !== null && existingUser !== undefined){
      localStorage.setItem('userId', existingUser.id.toString());
      this.authService.currentUserName = existingUser.role === Role.Admin ? 'Admin' : 'User';

      if(existingUser.role === Role.Admin){
        localStorage.setItem('token', 'admin');
        this.router.navigate(['/user/users']);
      }
      else{
        localStorage.setItem('token', 'user');
        this.router.navigate(['/user/profile']);
      }
    }
    else{
      this.alertify.error('Username or password not match!');
    }
      
    
  }

}
