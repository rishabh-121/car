import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookNowService {

  constructor(private httpClient:HttpClient) { }
  // headers = new HttpHeaders();

  // data:any;
  // headers = { header: new Headers({ 'Content-Type': 'application/json' }) 
  //     };
      // headers : new HttpHeaders({
      //   'Content-Type' : 'application/json'
      // })

// options = { headers: this.headers, withCredintials: false };



  public addBookNowData(image)
  {
    return this.httpClient.post<any>('http://localhost:8303/photos',
    image,
    { responseType: 'text' as 'json' }
    );
  }
}
