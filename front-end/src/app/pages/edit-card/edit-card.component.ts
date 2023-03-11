import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { PostService } from '../../service/post.service';
import { Post } from 'src/app/models/Post.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector   : 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls  : ['./edit-card.component.scss']
})

export class EditCardComponent {
  isLoggedIn  : boolean = false;
  postId      : any = '';
  post        : any;
  _id         : string = '';
  firstname   : string = '';
  lastname    : string = '';
  birthDate   : any    = Date;
  missingDate : any    = Date;
  missingPlace: string = '';
  description : string = '';
  picture     : any;
  userId      : string = '';

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private route      : ActivatedRoute,
    private router     : Router,
    private datePipe   : DatePipe
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.postId = this.route.snapshot.paramMap.get('id');
    this.post = history.state.post;

    if(this.postId) {
      this.postService.getPostById(this.postId).subscribe(post => {
        this.post         = post;
        this.firstname    = this.post.firstname;
        this.lastname     = this.post.lastname;
        this.birthDate    = this.post.birthDate;
        this.missingDate  = this.post.missingDate;
        this.missingPlace = this.post.missingPlace;
        this.description  = this.post.description;
        this.userId       = this.post.userId;
        this._id          = this.post._id
      })
    } else {
      console.log('Post not found');
    }

    // Birth date formated to age
    const birthDate = new Date(this.post.birthDate);
    const today     = new Date();
    const age       = Math.floor((today.getTime() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    this.post.age   = age;
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  // Edit the post
  editPost(event: Event, postId: string) {
    event.preventDefault();
    postId     = this._id;
    const user = localStorage.getItem('userId');

    if (this.post.userId === user) {
      // Object to send with post datas updated
      const updatedPost = {
        firstname   : this.firstname,
        lastname    : this.lastname,
        birthDate   : this.missingDate,
        missingDate : this.missingDate,
        missingPlace: this.missingPlace,
        description : this.description,
        picture     : this.picture,
      };

      this.postService.editPost(postId, updatedPost).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/index']);
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }
}


