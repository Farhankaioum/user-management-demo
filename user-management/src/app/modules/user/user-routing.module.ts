import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../_guards/auth.guard';
import { AdminAuthGuard } from '../../_guards/admin-auth.guard';

import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDetailsResolver } from 'src/app/_resolver/user-detail.resolver';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { UserEditResolver } from 'src/app/_resolver/user-edit-resolver';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: UserProfileComponent, resolve: {user: UserDetailsResolver}}
    ]
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AdminAuthGuard],
    children: [
      { path: 'users', component: UserListComponent }
    ]
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AdminAuthGuard],
    children: [
      { path: 'edit/:id', component: UserEditComponent, pathMatch: 'full', resolve: {user: UserEditResolver} }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
