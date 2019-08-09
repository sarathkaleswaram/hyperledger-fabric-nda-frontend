import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:3000/add';

  constructor(private http: HttpClient) { }

  addUser(date, month, company_desc, location, location_receive, company_receive, transaction, state_accord, state_executed) {
    console.log(date, month, company_desc, location, location_receive, company_receive, transaction, state_accord, state_executed);
    const obj = {
      date, 
      month, 
      company_desc, 
      location, 
      location_receive, 
      company_receive, 
      transaction, 
      state_accord, 
      state_executed
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getUser(){
    return this
           .http
           .get(`${this.uri}`);
  }
}
