import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { PostService } from './service/post.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListMissingFileComponent } from './list-missing-file/list-missing-file.component';
import { CardMissingComponent } from './components/card-missing/card-missing.component';
import { MissingFileComponent } from './missing-file/missing-file.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ButtonComponent,
    IndexComponent,
    DashboardComponent,
    LoginComponent,
    SigninComponent,
    SidebarComponent,
    ListMissingFileComponent,
    CardMissingComponent,
    MissingFileComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [
    AuthService,
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
