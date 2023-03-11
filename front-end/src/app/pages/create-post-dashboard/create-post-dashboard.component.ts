import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post-dashboard',
  templateUrl: './create-post-dashboard.component.html',
  styleUrls: ['./create-post-dashboard.component.scss']
})
export class CreatePostDashboardComponent {
  isLoggedIn  : boolean = false;
  objectToSend: any = {};
  post        : any = {};
  firstname   : string = '';
  lastname    : string = '';
  birthDate   : any;
  address     : any = String;
  missingDate : any;
  missingPlace: string = '';
  description : string = '';
  userId      : any;
  postId      : string = "";
  message     : string = "";
  isClicked   : boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private postService: PostService,
    private router     : Router
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      const userId = this.authService.getUserId();
      if (userId) {
        this.userId = userId;
      }
    }
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  // Create a post
  createPost(event: Event, objectToSend: {}) {
    event.preventDefault();
    // Object to send with datas
    this.post = {
      firstname   : this.firstname,
      lastname    : this.lastname,
      birthDate   : this.birthDate,
      address     : this.address,
      missingPlace: this.missingPlace,
      missingDate : this.missingDate,
      description : this.description,
      userId      : this.userId,
    }

    objectToSend = this.post;

    if (this.isLoggedIn === true) {
      console.log('hello2')
      this.postService.createPost(objectToSend).subscribe(response => {
        console.log(response);
        // Clear the form fields
        this.isClicked    = true;
        this.firstname    = '';
        this.lastname     = '';
        this.birthDate    = '';
        this.address      = '';
        this.missingPlace = '';
        this.missingDate  = '';
        this.description  = '';
      });
    }
  }
}
