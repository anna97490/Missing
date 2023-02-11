import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  constructor(private auth: AuthentificationService ,
              private router : Router){ }

  ngOnInit(): void {

  }

  onLogin(): void {
    this.auth.login();
    this.router.navigateByUrl('/home');
  }
}
