import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  model: any = {};
  name: string;
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('token');
  }

  isAdmin(): boolean{
    return localStorage.getItem('token') === 'admin';
  }

  loggedIn(){
    return this.authService.loggedIn();
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/home']);
  }

}
