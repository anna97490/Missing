export class Post {
  _id: string;
  lastname: string;
  firstname: string;
  birthDate: Date;
  picture: string;
  missingDate: Date;
  missingPlace: string;
  description: string;
  createdAt: Date;
  userId: string;

  constructor(
    _id: string,
    lastname: string,
    firstname: string,
    birthDate: Date,
    picture: string,
    missingDate: Date,
    missingPlace: string,
    description: string,
    createdAt: Date,
    userId: string
  ) {
    this._id = _id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.birthDate = birthDate;
    this.picture = picture;
    this.missingDate = missingDate;
    this.missingPlace = missingPlace;
    this.description = description;
    this.createdAt = createdAt;
    this.userId = userId;
  }
}
