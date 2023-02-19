import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: any;
  isLoggedIn: boolean = false;
  showSidebar: boolean = true;

  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit() {
    // this.isLoggedIn = this.authService.isLoggedIn();
    // if (this.isLoggedIn) {
    //   this.userService.getUsers().subscribe(
    //     (data) => {
    //       this.user = data;
    //       this.showSidebar = true;
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // }
  }
}
