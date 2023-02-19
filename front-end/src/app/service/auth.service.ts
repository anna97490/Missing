import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl: string = 'http://localhost:3000/api/user';
  private loggedIn: boolean = false;
  router: any;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password })
    .pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        this.loggedIn = true;
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
    localStorage.removeItem('token');
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    this.router.navigate(['/home']);
    return this.loggedIn;
  }
}
