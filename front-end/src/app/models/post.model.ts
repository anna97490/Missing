export class Post {
  id: number;
  lastname: string;
  firstname: string;
  birthDate: string; // a changer
  picture: string;
  dateOfDisappearance: string; // a changer
  placeOfDisappearance: string;
  description: string;

  constructor(
    id: number,
    lastname: string,
    firstname: string,
    birthDate: string,
    picture: string,
    dateOfDisappearance: string,
    placeOfDisappearance: string,
    description: string
) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.birthDate = birthDate;
    this.picture = picture;
    this.dateOfDisappearance = dateOfDisappearance;
    this.placeOfDisappearance = placeOfDisappearance;
    this.description = description;
  }
}
