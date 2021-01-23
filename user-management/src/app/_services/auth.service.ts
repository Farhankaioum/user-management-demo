import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[];
  constructor(private userService: UserService) { }

  login(model: any){
    return this.userService.getUsers().pipe(
      map((response: User[]) => {
        this.users = response;
        var existingUser = this.users.filter(u => u.email === model.email &&
           u.password === model.password)[0];
        
        if(existingUser !== null){
          localStorage.setItem('token', existingUser.role.toString());
          localStorage.setItem('user', JSON.stringify(existingUser));
        }
      })
    );
  }

  retgister(user: User){
    return this.userService.createUser(user);
  }

  loggedIn(): boolean{
    const token = localStorage.getItem('token');
    return token !== null;
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
}
