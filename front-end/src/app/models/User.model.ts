import { Router } from "@angular/router";

export class User {
  private isLogged: boolean;
  private lastname: string;
  private firstname: string;
  private birthDate: Date;
  private address: string;
  private email: string;
  private password: string;
  private profilePicture: string;
  id: any;

  constructor(
    private router: Router,
    isLogged: boolean,
    nom: string,
    prenom: string,
    birthDate: Date,
    address: string,
    email: string,
    password: string,
    profilePicture: string
     ) {
      this.isLogged = false;
      this.lastname = nom;
      this.firstname = prenom;
      this.birthDate = birthDate;
      this.address = address;
      this.email = email;
      this.password = password;
      this.profilePicture = profilePicture;
  }
}
