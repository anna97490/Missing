import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './signin/signin.component';
import { UserInfosComponent } from './pages/user-infos/user-infos.component';
import { PostsListDashboardComponent } from './pages/posts-list-dashboard/posts-list-dashboard.component';
import { CreatePostDashboardComponent } from './pages/create-post-dashboard/create-post-dashboard.component';
import { AuthGuard } from './service/auth.guard';
import { EditCardComponent } from './pages/edit-card/edit-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'edit-post/:userId/:id', component: EditCardComponent, canActivate: [AuthGuard] },
  { path: 'user-infos/:userId', component: UserInfosComponent, canActivate: [AuthGuard] },
  { path: 'create-missing-post/:userId', component: CreatePostDashboardComponent, canActivate: [AuthGuard] },
  { path: 'list-missing-posts/:userId', component: PostsListDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
