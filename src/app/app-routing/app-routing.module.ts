import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../components/home/home.component'
import { LatestComponent } from '../components/latest/latest.component';
import { DetailsPostComponent } from '../components/details-post/details-post.component';
import { ListPostsComponent } from '../components/list-posts/list-posts.component';
import { LoginComponent } from '../components/user/login/login.component';
import { RegisterComponent } from '../components/user/register/register.component';
import { ProfileComponent } from '../components/user/profile/profile.component';
import { Page404Component } from '../components/page404/page404.component';

const routes: Routes = [
 
  {path: '' ,component: HomeComponent},
  {path: 'latest' ,component: LatestComponent},
  {path: 'post/:id' ,component: DetailsPostComponent},
  {path: 'admin/list-posts' ,component: ListPostsComponent},
  {path: 'user/login' ,component: LoginComponent},
  {path: 'user/register' ,component:RegisterComponent},
  {path: 'user/profile' ,component: ProfileComponent},
  


 
  {path: '**', component: Page404Component}//POner este siempre al ultimo

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }