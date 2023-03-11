import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { UserService } from './service/user.service';
import { PostService } from './service/post.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './signin/signin.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardMissingComponent } from './components/card-missing/card-missing.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { EditCardComponent } from './pages/edit-card/edit-card.component';
import { PostsListDashboardComponent } from './pages/posts-list-dashboard/posts-list-dashboard.component';
import { CreatePostDashboardComponent } from './pages/create-post-dashboard/create-post-dashboard.component';
import { UserInfosComponent } from './pages/user-infos/user-infos.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ButtonComponent,
    IndexComponent,
    LoginComponent,
    SigninComponent,
    SidebarComponent,
    CardMissingComponent,
    ModalComponent,
    EditCardComponent,
    PostsListDashboardComponent,
    CreatePostDashboardComponent,
    UserInfosComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    UserService,
    PostService,
    AuthGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
