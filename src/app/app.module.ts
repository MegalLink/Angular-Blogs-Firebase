import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { LatestComponent } from './components/latest/latest.component';
import { DetailsPostComponent } from './components/details-post/details-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { PostComponent } from './components/post/post.component';

import { DataApiService } from './services/data-api.service';
import { AuthService } from './services/auth.service';
import { PostsComponent } from './components/posts/posts.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule,],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, HeroComponent, LatestComponent, DetailsPostComponent, ListPostsComponent, LoginComponent, RegisterComponent, Page404Component, ProfileComponent, PostComponent, PostsComponent],
  bootstrap:    [ AppComponent ],
  providers: [DataApiService, AuthService]
})
export class AppModule { }
