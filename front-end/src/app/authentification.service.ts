import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private token!: string ;

  login(): void {
    this.token = 'MyFakeToken';
  }

  getToken(): string {
    return this.token;
  }
}



