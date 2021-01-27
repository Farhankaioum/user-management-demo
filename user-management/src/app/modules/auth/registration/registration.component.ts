import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../../_services/user.service';
import { NameValidator } from '../../../_utility/validators/name.validator';
import { User } from '../../../_models/user';
import { uniqueEmailValidator } from '../../../_utility/directives/unique-email-validator.directive';
import { Role } from '../../../_models/role';
import { AuthService } from '../../../_services/auth.service';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;
  users: User[];
  registerForm: FormGroup;

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

    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.fb.group({
      role: ['user'],
      firstName: ['', [Validators.required, NameValidator.cannotContainSpace]],
      lastName: ['', [Validators.required, NameValidator.cannotContainSpace]],
      email: ['',
       [Validators.required, Validators.email],
       uniqueEmailValidator(this.userService)
      ],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      confirmPassword: ['', Validators.required]
    }, { validators: [this.passwordMatchValidator]});
  }

  get email() {
    return this.registerForm.get('email');
  }
  
  get role(){
    return this.registerForm.get('role');
  }

  passwordMatchValidator(g: FormGroup){
    return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true};
  }

  register(){
    this.user = Object.assign({}, this.registerForm.value);
    this.user.role = this.role.value === 'user' ? Role.User : Role.Admin;
   if(this.registerForm.valid){
     this.userService.createUser(this.user).subscribe(data => {
       this.alertify.success('Your registration successfull!');
       this.router.navigate(['/auth/login']);
     }, error => {
      this.alertify.error('Error occured when registration!');
     });
     
   }
  }

  isEmailUnique(email: string): boolean{
    var count  = 0;
    for(let user of this.users){
      if(user.email === email){
        count = count + 1;
      }

      return count < 1;
    }
  }

  checkEmailNotTaken(email: string){
    var count  = 0;
    for(let user of this.users){
      if(user.email === email){
        count = count + 1;
      }

      return count < 1;
    }
  }

  cancel(){
    
  }

}
