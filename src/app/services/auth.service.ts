import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {map} from 'rxjs/operators';
@Injectable()
export class AuthService {

  constructor(private afauth:AngularFireAuth) { }
  registerUser(){
         
  }
  loginEmailUser(){

  }
  loginGoogleUser(){
    return this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider);
  }
  logoutUser(){
    this.afauth.auth.signOut;
  }
  isAuth(){
    return this.afauth.authState.pipe(map(auth=>auth))
  }
}