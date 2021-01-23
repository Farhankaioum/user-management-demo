import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  SERVER_URL: string = "api/users";
  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]>{ 
    return this.httpClient.get<User[]>(this.SERVER_URL);
}

public getUser(userId): Observable<User>{
    return this.httpClient.get<User>(`${this.SERVER_URL}/${userId}`); 
}

public getUserByEmail(email: string, users: User[]){
  var user = users.filter(u => u.email == email)[0];
  return user;
}

public createUser(user: User){
   return this.httpClient.post(`${this.SERVER_URL}`, user);
}

public deleteUser(userId){
   return this.httpClient.delete(`${this.SERVER_URL}/${userId}`)
  }

public updateUser(user: User){
   return this.httpClient.put(`${this.SERVER_URL}/${user.id}`, user)
  }
  
}
