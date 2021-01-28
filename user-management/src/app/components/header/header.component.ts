import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  model: any = {};
  name: string;
  
  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.name = this.authService.currentUserName;
    console.log();
  }

  isAdmin(): boolean{
    return localStorage.getItem('token') === 'admin';
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logOut(){
    this.authService.logOut();
    this.authService.currentUserName = null;
    this.router.navigate(['']);
  }

}
