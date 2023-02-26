export class Post {
  id: string;
  lastname: string;
  firstname: string;
  birthDate: Date;
  picture: string;
  missingDate: Date;
  missingPlace: string;
  description: string;
  createdAt: Date;

  constructor(
    id: string,
    lastname: string,
    firstname: string,
    birthDate: Date,
    picture: string,
    missingDate: Date,
    missingPlace: string,
    description: string,
    createdAt: Date
  ) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.birthDate = birthDate;
    this.picture = picture;
    this.missingDate = missingDate;
    this.missingPlace = missingPlace;
    this.description = description;
    this.createdAt = createdAt;
  }
}
