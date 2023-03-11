import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent implements OnInit {
  isLoggedIn       : boolean = false;
  userId           : any;
  objectToSend     : any = {};
  user             : any = User;
  firstname        : string = '';
  lastname         : string = '';
  birthDate        : any;
  address          : string = '';
  email            : string = '';
  // picture          : string = '';
  // password         : string = '';
  message          : string = '';
  isClicked        : boolean = false;
  isEditedOrDeleted: boolean = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router     : Router
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.userId = localStorage.getItem('userId');

      if (this.userId) {
        this.userService.getUserById(this.userId).subscribe((user: User) => {
          this.user         = user;
          this.firstname    = this.user.firstname;
          this.lastname     = this.user.lastname;
          this.birthDate    = this.user.birthDate;
          this.address      = this.user.address;
          this.email        = this.user.email;
          // this.picture      = this.user.picture;
          // this.password     = this.user.password;
        });
      } else {
        console.log('User not found');
      }
    };
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  showFormUser() {
    this.isClicked = true;
  }

  closeForm() {
    this.isClicked = false;
  }

  // Edit user
  editUser(event: Event, userId: string) {
    event.preventDefault();
    userId = this.userId;

    if (userId === this.user._id) {
      // Object to send with user datas updated
      const updatedUser = {
        firstname: this.firstname,
        lastname : this.lastname,
        birthDate: this.birthDate,
        address  : this.address,
        email    : this.email,
        // password : this.password
        // picture  : this.picture
      }
      this.userService.editUser(userId, updatedUser).subscribe({
        next: (response) => {
          console.log(response);
          this.firstname         = this.user.firstname;
          this.lastname          = this.user.lastname;
          this.birthDate         = this.user.birthDate;
          this.address           = this.user.address;
          this.email             = this.user.email;
          // this.picture      = this.user.picture;
          // this.password     = this.user.password;
          this.isEditedOrDeleted = true;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }

  // Delete user
  deleteUser(event: Event, userId: string) {
    event.preventDefault();
    userId = this.userId;

    if (userId === this.user._id) {
      this.userService.deleteUser(userId).subscribe({
        next: (response) => {
          console.log(response)
          this.authService.logout();
          this.isLoggedIn  = false;
          this.router.navigate(['/index']);
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }

}
