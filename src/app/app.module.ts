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
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database-deprecated';
import { AngularFireAuthModule } from '@angular/fire/auth';//login
import { AngularFireStorageModule } from '@angular/fire/storage';//archivos



var firebaseConfig = {
    apiKey: "AIzaSyDfBZbPqlhR9jAgEDUqMlFQHUAbXn67UjY",
    authDomain: "blog-app-73342.firebaseapp.com",
    databaseURL: "https://blog-app-73342.firebaseio.com",
    projectId: "blog-app-73342",
    storageBucket: "blog-app-73342.appspot.com",
    messagingSenderId: "622618270021",
    appId: "1:622618270021:web:6f966c00d507016712462c"
  };

//INSTALAR ANGULAR V 5.4.2 @angular/fire@5.4.2

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireDatabaseModule,AngularFireAuthModule,AngularFireStorageModule],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, HeroComponent, LatestComponent, DetailsPostComponent, ListPostsComponent, LoginComponent, RegisterComponent, Page404Component, ProfileComponent, PostComponent, PostsComponent],
  bootstrap:    [ AppComponent ],
  providers: [DataApiService, AuthService]
})
export class AppModule { }
