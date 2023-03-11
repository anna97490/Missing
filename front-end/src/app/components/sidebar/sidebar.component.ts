import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user       : any;
  isLoggedIn : boolean = false;
  showSidebar: boolean = true;
  userId     : any;
  token      : any;

  constructor(
    private authService: AuthService,
    private router     : Router,
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn === true) {
      this.userId = localStorage.getItem('userId');
      this.token  = localStorage.getItem('token');
    }
  }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  logout(event: Event) {
    event.preventDefault();

    if(confirm("Êtes-vous sûr de vouloir vous déconnecter ?")) {
      this.authService.logout();
      this.isLoggedIn  = false;
      this.showSidebar = false;
    }
  }
}
