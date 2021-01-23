import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/_models/role';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

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
    if(this.authService.loggedIn()){
      this.router.navigate(['/']);
    }

    this.route.data.subscribe(data => {
      this.users = data.users;
    });

    this.createLoginForm();

    var result = this.authService.loggedIn();
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(){
    this.user = Object.assign({}, this.loginForm.value);

    var existingUser = this.users.filter(u => u.email === this.user.email &&
       u.password === this.user.password)[0];
    if(existingUser !== null){
      localStorage.setItem('userId', existingUser.id.toString());
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
      this.alertify.error('error occured when login!');
    }
      
    
  }

}
