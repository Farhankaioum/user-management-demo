import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlRedirectGuard } from '../../_guards/url-redirect.guard';
import { UserListResolver } from '../../_resolver/user-list.resolver';

import { LoginComponent} from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, resolve: {users: UserListResolver}, canActivate: [UrlRedirectGuard] },
  { path: 'registration', component: RegistrationComponent, resolve: {users: UserListResolver}, canActivate: [UrlRedirectGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
