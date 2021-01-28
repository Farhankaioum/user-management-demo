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
            { id:  1, firstName:  'km', lastName: 'miah', email: 'km@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  2, firstName:  'test', lastName: 'test', email: 'test@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  3, firstName:  'admin', lastName: 'admin', email: 'admin@gmail.com', password: '123456', role: Role.Admin, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  2, firstName:  'km', lastName: 'miah', email: 'km@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  4, firstName:  'ab', lastName: 'Ahmed', email: 'ab@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  6, firstName:  'cd', lastName: 'Ahmed', email: 'cd@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  7, firstName:  'ef', lastName: 'Ahmed', email: 'ef@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  8, firstName:  'gh', lastName: 'Ahmed', email: 'gh@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  9, firstName:  'ij', lastName: 'Ahmed', email: 'ij@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  10, firstName:  'kl', lastName: 'Ahmed', email: 'kl@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  11, firstName:  'mn', lastName: 'Ahmed', email: 'mn@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  12, firstName:  'op', lastName: 'Ahmed', email: 'op@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  13, firstName:  'qr', lastName: 'Ahmed', email: 'qr@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  14, firstName:  'st', lastName: 'Ahmed', email: 'st@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  15, firstName:  'uv', lastName: 'Ahmed', email: 'uv@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  16, firstName:  'wx', lastName: 'Ahmed', email: 'wx@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  17, firstName:  'yz', lastName: 'Ahmed', email: 'yx@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            { id:  18, firstName:  'ab', lastName: 'Ahmed', email: 'ab@gmail.com', password: '123456', role: Role.User, dateOfBirth:'2014-10-10', gender: Gender.Male, interest: 'something', address: 'Dhaka', phone: '00000' },
            
           ];
        
           return {users};
    }
  
    genId(users: User[]): number {
      return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    }
  }