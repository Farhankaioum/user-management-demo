import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserListResolver } from '../../_resolver/user-list.resolver';
import { UniqueEmailValidatorDirective } from '../../_utility/directives/unique-email-validator.directive';

@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserListResolver,
    UniqueEmailValidatorDirective
  ]
})
export class AuthModule { }
