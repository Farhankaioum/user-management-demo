import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListResolver } from 'src/app/_resolver/user-list.resolver';

import { LoginComponent} from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, resolve: {users: UserListResolver} },
  { path: 'registration', component: RegistrationComponent, resolve: {users: UserListResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
