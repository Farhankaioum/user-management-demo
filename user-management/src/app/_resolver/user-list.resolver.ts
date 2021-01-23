import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Injectable({ providedIn: 'root' })
export class UserListResolver implements Resolve<User[]>{
    
    constructor(private authService: UserService, private router: Router){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
        return this.authService.getUsers().pipe(
            catchError(error => {
                this.router.navigate(['']);
                return of(null);
            })
        );
    }
}