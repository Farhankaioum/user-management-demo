import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { 
    path: 'auth', loadChildren:() => import('./modules/auth/auth.module')
    .then(mod => mod.AuthModule)
  },
  {
    path: 'user', loadChildren:() => import('./modules/user/user.module')
      .then(mod => mod.UserModule)
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
