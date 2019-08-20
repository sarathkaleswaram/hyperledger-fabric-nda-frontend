import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class APIService {
  url = "http://183.82.116.216:3000";
  
  constructor(private http: HttpClient) { }
  
  login(body) {
    return this.http.post(`${this.url}/login`, body, httpOptions); 
  }

  getNDATxs(body) {
    return this.http.post(`${this.url}/getNDATxs`, body, httpOptions);
  }
  
  initNDA(body) {
    return this.http.post(`${this.url}/invoke`, body, httpOptions);
  }

  submitNDA(body) {
    return this.http.post(`${this.url}/invoke`, body, httpOptions);
  }
}
