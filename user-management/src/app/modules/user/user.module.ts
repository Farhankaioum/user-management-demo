import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { TabsModule } from 'ngx-bootstrap/tabs';
import{ ReactiveFormsModule, FormsModule} from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';


@NgModule({
  declarations: [UserListComponent, UserProfileComponent, UserEditComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    UserRoutingModule,
    DataTablesModule,
    TabsModule.forRoot(),
  ]
})
export class UserModule { }
