import { Component } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent {
  posts: Post[] = [];
  opened: boolean = false;

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

  toggleSidebar() {
    this.opened = !this.opened
  }
}
