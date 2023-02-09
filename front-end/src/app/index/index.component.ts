import { Component } from '@angular/core';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent {
  opened: boolean = false;
  dropdownOpen: boolean = false;
  isUserLoggedIn: boolean = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
