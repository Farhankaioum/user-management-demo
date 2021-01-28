import { BrowserModule } from '@angular/platform-browser';
import { forwardRef, NgModule } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule} from '@angular/forms'

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
import { UrlRedirectGuard } from './_guards/url-redirect.guard';
import { AdminAuthGuard } from './_guards/admin-auth.guard';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved.guard';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextAreaExpandedComponent } from './shared/components/text-area-expanded/text-area-expanded.component';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    TextAreaExpandedComponent
  ],
  imports: [
    ReactiveFormsModule,
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
    ),
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: ErrorInterceptor},
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaExpandedComponent),
      multi: true
    },
    AuthService,
    AlertifyService,
    UserListResolver,
    UserDetailsResolver,
    UserEditResolver,
    AuthGuard,
    UrlRedirectGuard,
    PreventUnsavedChanges,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
