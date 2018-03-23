import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class SharedService {

  constructor(private http: HttpClient) { }

  getUserDetails(email, pass) {
    debugger;
    this.http.get(`${environment.makomTovServer}/Users/GetUser?usereMail=aaa@gmail.com&password=1234`).toPromise().then( x =>
    console.log(x)).catch(e => console.log(e));
  }
}
