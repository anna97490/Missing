import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { User } from '../models/User.model';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  private apiUrl: string = 'http://localhost:3000/api/user';
  token         : any = localStorage.getItem('token');

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {

  }

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(userId: string) {
    const url = `${this.apiUrl}/${userId}`;
    const token = this.authService.getAuthToken();

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + token })
    };

    return this.http.get<User>(url, httpOptions).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }

  // Edit user
  editUser(userId: string, updatedUser: any) {
    const url = `${this.apiUrl}/${userId}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + this.token })
    };
    return this.http.put(url, updatedUser, httpOptions).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }

  // Delete the user
  deleteUser(id: string) {
    const url = `${this.apiUrl}/${id}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + this.token })
    };
    return this.http.delete(url, httpOptions).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }
}
