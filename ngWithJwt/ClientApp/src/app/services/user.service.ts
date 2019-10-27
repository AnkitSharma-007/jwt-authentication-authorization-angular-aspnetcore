import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  myAppUrl = '';

  constructor(private http: HttpClient) {
  }

  getUserData() {
    return this.http.get('/api/user/GetUserData').pipe(map(result => result));
  }

  getAdminData() {
    return this.http.get('/api/user/GetAdminData').pipe(map(result => result));
  }
}
