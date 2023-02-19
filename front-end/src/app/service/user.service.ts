import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'http://localhost:3000/api/user';
  // constructor(private http: HttpClient) {}

  // getUsers() {
  //   return this.http.get<User[]>(this.apiUrl);
  // }

  // getUserById(id: string) {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<User>(url);
  // }

  // // Fonction de modification d'un utilisateur
  // updateUser(user: User) {
  //   const url = `${this.apiUrl}/${user.id}`;
  //   return this.http.put(url, user);
  // }

  // // Fonction de suppression d'un utilisateur
  // deleteUser(id: number) {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete(url);
  // }
}
