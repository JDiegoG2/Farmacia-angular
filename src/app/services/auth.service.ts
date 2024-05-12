import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseApiUrl = 'http://localhost:7070';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(this.baseApiUrl + '/register', user);
  }

  login(credentials: any) {
    return this.http.post(this.baseApiUrl + '/login', credentials, { responseType: 'text' });
  }
}
