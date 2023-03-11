import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl  : string  = 'http://localhost:3000/api/user';
  private loggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        map(response => {
          localStorage.setItem('userId', response.userId);
          localStorage.setItem('token', response.token);
          localStorage.setItem('loggedIn', 'true');
          this.loggedIn = true;
          console.log("this.loggedIn", this.loggedIn)
          return response;
        })
      );
  }

  signup(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, user)
      .pipe(
        map(response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('loggedIn', 'true');
          this.loggedIn = true;
          return response;
        })
      );
  }

  logout() {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('loggedIn');
    this.loggedIn = false;
    this.router.navigate(['/index']);
  }

  isLoggedIn(): boolean {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      return true;
    } else {
      this.router.navigate(['/index']);
      return false;
    }
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }
}
