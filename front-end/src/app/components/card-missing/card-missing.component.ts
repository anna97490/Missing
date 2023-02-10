import { Component } from '@angular/core';
import { Post } from '../../models/Post.model';

@Component({
  selector: 'app-card-missing',
  templateUrl: './card-missing.component.html',
  styleUrls: ['./card-missing.component.scss']
})
export class CardMissingComponent {
  posts: Post[] = [];

  ngOnInit() {
    this.posts = [
      { id: 1,
        lastname: 'Do',
        firstname: 'Jane',
        birthDate: '01/01/01',
        picture: 'picture',
        dateOfDisappearance: '01/01/2020',
        placeOfDisappearance: 'Paris',
        description: 'description'
      },
    ];
  }

}
