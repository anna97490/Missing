import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent {
  modalOpen = false;
  posts: Post[] = [];
  filteredPosts: any = [];
  searchText: string = '';
  selectedDate: any = Date;
  id: string ="";

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
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

  onSearch() {
    console.log(this.posts)
    if (typeof this.searchText === "string") {
      this.filteredPosts = this.posts.filter((post) =>
      post.missingPlace.includes(this.searchText)
    );
    this.posts = this.filteredPosts;
    } else {
      this.filteredPosts = [];
    }
  }

  editPost(event: Event, id: string) {
    event.preventDefault();
    id = this.id

    this.posts.forEach(post => {
      if (id === post.id) {
        this.postService.editPost(id).subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(['/index']);
          },
          error: (error) => {
            console.error(error);
          }
        })
      }
    })
  }

  deletePost(event: Event) {
    event.preventDefault();
  }

  // this.postService.getPostById(id).subscribe((post: Post) => {
  //   // Utiliser le post récupéré
  // });

}
