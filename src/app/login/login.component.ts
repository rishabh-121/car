import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from './auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  token: any;
  new:any;
  authRequest:any={
    userName:'',
    password:'',
  };

  signup: any={
    userName:'',
    password:'',
    email:''
 };

  response: any;

  constructor(private service: AuthService, private router: Router, private app:AppComponent) {}

  ngOnInit(): void {}

  public getAccessToken() {
    if((this.authRequest.userName!='' && this.authRequest.password!=''))
    {
    let resp = this.service.generateToken(this.authRequest);
    resp.subscribe((data) => {
      this.token = data;
      this.service.loginUser(this.token);
      this.router.navigate(['/home']);
      this.app.loggedIn=this.service.isLoggedIn();
      
    });
  }
  else{
    console.log("Bad credentials");
  }
  }

  public newUser(){
    if((this.authRequest.userName!='' && this.authRequest.password!=''))
    {
    let res = this.service.signUp(this.signup);
    res.subscribe((data) => {
      console.log(data);
      this.router.navigate(['/login']); 
    });
  }
  else{
    console.log("Bad credentials");
  }
  }


  public accessBookingApi(token) {
    let resp = this.service.welcome(token);
    resp.subscribe((data) => {
      this.response = data;
      this.router.navigate(['/booking']);
    });
  }
}


