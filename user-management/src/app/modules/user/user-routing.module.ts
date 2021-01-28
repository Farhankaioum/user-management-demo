import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../_guards/auth.guard';
import { AdminAuthGuard } from '../../_guards/admin-auth.guard';

import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { UserEditResolver } from '../../_resolver/user-edit-resolver';
import { UserDetailsResolver } from '../../_resolver/user-detail.resolver';
import { PreventUnsavedChanges } from '../../_guards/prevent-unsaved.guard';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: UserProfileComponent, resolve: {user: UserDetailsResolver},
          canDeactivate: [PreventUnsavedChanges]}
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
      { path: 'edit/:id', component: UserEditComponent, pathMatch: 'full',
         resolve: {user: UserEditResolver}}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
