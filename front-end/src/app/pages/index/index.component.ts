import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/Post.model';
import { PostService } from '../../service/post.service';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  @Input() showContCreation: boolean = true;
  isLoggedIn   : boolean = false;
  posts        : Post[] = [];
  allPosts     : Post[] = [];
  filteredPosts: any = [];
  searchText   : string = '';
  selectedDate : any = Date;
  id           : string = '';
  user         : any;
  modalOpen    = false;

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private userService: UserService,
    private router     : Router
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      // Sort the posts by ascendant
      this.posts = posts.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        } else if (a.createdAt < b.createdAt) {
          return 1;
        } else {
          return 0;
        }
      });
      this.filteredPosts = this.posts;
      this.allPosts      = [...this.posts];
    })
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  openModal(event: Event) {
    event.preventDefault();
    console.log('open')
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  // Fonction for search bar
  onSearch() {
    if (this.searchText) {
      // Search by missingPlace
      this.filteredPosts = this.allPosts.filter((post) =>
        post.missingPlace.includes(this.searchText)
      );
      this.posts = [...this.filteredPosts];
    } else {
      this.posts = [...this.allPosts];
    }
  }
}
