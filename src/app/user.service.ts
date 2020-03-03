import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getData() {
    
    return this.http.get<Data>('https://reqres.in/api/users');
  }

  constructor(private http: HttpClient) { }
}


