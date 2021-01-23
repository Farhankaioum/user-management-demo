import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class AdminAuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router){}
    canActivate(): boolean {
      if (this.authService.loggedIn()){
          var token = localStorage.getItem('token');
          if(token === 'admin'){
            return true;
          }
          else{
            this.router.navigate(['/user/profile']);
              return false; 
          }
         
      }
      this.router.navigate(['/auth/login']);
      return false;
    }
  }