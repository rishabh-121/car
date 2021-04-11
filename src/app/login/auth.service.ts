import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public generateToken(request) {
    return this.httpClient.post<string>(
      'http://localhost:9192/authenticate',
      request,
      { responseType: 'text' as 'json' }
    );
  
  }

  public loginUser(token)
  {
    localStorage.setItem("token",token)
    return true;
  }

  public isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined||token===''||token==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

  public logout()
  {
    localStorage.removeItem('token');
    return true;
  }

  public signUp(req)
  {
    return this.httpClient.post<string>(
      'http://localhost:9192/signUp',
      req
    );
  }


  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>('http://localhost:9192/', {
      headers,
      responseType: 'text' as 'json',
    });
  }
}
