import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get('/api/user/GetUserData');
  }

  getAdminData() {
    return this.http.get('/api/user/GetAdminData');
  }
}
