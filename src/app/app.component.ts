import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'on-demand-car-wash-system';
  loggedIn=false;
  constructor(private router: Router, private authservice:AuthService) {}

  gotologin() {
    this.router.navigate(['/login']); // define your component where you want to go
  }
  gotoHome() {
    this.router.navigate(['/home']); // define your component where you want to go
  }
  gotoAbout() {
    this.router.navigate(['/aboutus']);
  }
  gotoContact() {
    this.router.navigate(['/contact']);
  }
  gotoBooking() {
    this.router.navigate(['/booking']);
  }
//load automatically when component load
  ngOnInit():void{
    this.loggedIn=this.authservice.isLoggedIn();
  }
  logoutUser()
  {
    this.authservice.logout();
    //window.location.reload;
    this.loggedIn=this.authservice.isLoggedIn();
  }

}
