import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080';

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/sec/user/authenticate`, user);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }
}
