import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  preventDefault(event: Event) {
    event.preventDefault();
  }

  email: string = "";
  password: string = "";

  login(event: Event) {
    event.preventDefault();

    this.authService.login(this.email, this.password).subscribe({
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
