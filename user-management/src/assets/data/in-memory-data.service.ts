import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Gender } from '../../app/_models/gender';
import { Role } from '../../app/_models/role';
import { User } from '../../app/_models/user';

@Injectable({
    providedIn: 'root',
  })

  export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let  users: User[] =  [
            { id:  1, firstName:  'km', lastName: 'miah', email: 'km@gmail.com', password: '123456', role: Role.User, dateOfBirth:'1/23/2021', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  2, firstName:  'test', lastName: 'test', email: 'test@gmail.com', password: '123456', role: Role.User, dateOfBirth:'1/23/2021', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  3, firstName:  'admin', lastName: 'admin', email: 'admin@gmail.com', password: '123456', role: Role.Admin, dateOfBirth:'1/23/2021', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' }
            
           ];
        
           return {users};
    }
  
    genId(users: User[]): number {
      return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    }
  }