import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl: string = 'http://localhost:3000/api/user';
  private loggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
    .pipe(
      map(response => {
        localStorage.setItem('token', response.token);
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
          this.loggedIn = true;
          return response;
        })
      );
  }

  logout() {
    console.log('step2')
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.router.navigate(['/index']);
  }

  isLoggedIn(): boolean {
    if (!this.loggedIn) {
      this.router.navigate(['/index']);
    }
    return this.loggedIn;
  }

  getAuthToken(): string | null {
    console.log('logged')
    return localStorage.getItem('token');
  }
}
