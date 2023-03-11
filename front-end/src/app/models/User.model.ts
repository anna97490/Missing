import { Router } from "@angular/router";

export class User {
  isLogged: boolean;
  _id: string;
  lastname: string;
  firstname: string;
  birthDate: Date;
  address: string;
  email: string;
  password: string;
  profilePicture: string;

  constructor(
    router: Router,
    isLogged: boolean,
    _id: string,
    firstname: string,
    lastname: string,
    birthDate: Date,
    address: string,
    email: string,
    password: string,
    profilePicture: string
     ) {
      this.isLogged = false;
      this._id = _id;
      this.lastname = lastname;
      this.firstname = firstname;
      this.birthDate = birthDate;
      this.address = address;
      this.email = email;
      this.password = password;
      this.profilePicture = profilePicture;
  }
}
