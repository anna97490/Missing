import { Component, OnInit, Input  } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PostService } from '../../service/post.service';
import { AuthService } from '../../service/auth.service';
import { Post } from 'src/app/models/Post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-missing',
  templateUrl: './card-missing.component.html',
  styleUrls: ['./card-missing.component.scss']
})

export class CardMissingComponent implements OnInit {
  @Input() post: any;
  user         : any;
  isLoggedIn   : boolean = false;
  userId       : any;
  postId       : string = '';
  posts        : Post[] = [];
  allPosts     : Post[] = [];
  filteredPosts: any = [];
  originalPost : any;

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router     : Router,
    private datePipe   : DatePipe
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.userId     = localStorage.getItem('userId');
    // Get all posts
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });

    // Birth date formated to age
    const birthDate = new Date(this.post.birthDate);
    const today     = new Date();
    const age       = Math.floor((today.getTime() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    this.post.age   = age;
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  // Edit Post
  editPost(event: Event, postId: string) {
    event.preventDefault();

    this.posts.forEach(post => {
      this.postId       = post._id;
      this.originalPost = {...post};

      if (postId === this.postId && this.isLoggedIn === true) {
        this.router.navigate(['/edit-post/', this.post.userId, postId], { state: { post: this.originalPost }})
      }
    });
  }

  // Delete Post
  deletePost(event: Event, postId: string) {
    event.preventDefault();

    this.posts.forEach(post => {
      this.postId = post._id

      if (postId === this.postId && this.post.userId === post.userId) {
        this.postService.deletePost(postId).subscribe(response => {
          console.log(response);
        })
      }
    });
  }
}
