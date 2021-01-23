import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module';
import { HomeComponent } from './components/home/home.component'
import { InMemoryDataService } from '../assets/data/in-memory-data.service';
import { UserService }  from './_services/user.service';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { UserListResolver } from './_resolver/user-list.resolver';
import { UserDetailsResolver } from './_resolver/user-detail.resolver';
import { UserEditResolver } from './_resolver/user-edit-resolver';
import { AuthGuard } from './_guards/auth.guard';
import { AdminAuthGuard } from './_guards/admin-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    DataTablesModule,
    BsDropdownModule,
    AuthModule,
    UserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    UserService,
    AuthService,
    AlertifyService,
    UserListResolver,
    UserDetailsResolver,
    UserEditResolver,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
