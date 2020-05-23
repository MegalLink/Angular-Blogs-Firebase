import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import {map} from 'rxjs/operators';
@Injectable()
export class AuthService {

  constructor(private afauth:AngularFireAuth) { }
  registerUser(email:string,password:string){
         return new Promise((resolve,reject)=>{
           this.afauth.auth.createUserWithEmailAndPassword(email,password).then(user=>{
             return resolve(user),err=>reject(err);
           })
         })
  }
  
  loginEmailUser(email:string,password:string){
    return new Promise((resolve,reject)=>{
      this.afauth.auth.signInWithEmailAndPassword(email,password)
      .then(user=>{
        return resolve(user),err=>reject(err);
      })
    })

  }
  loginGoogleUser(){
    return this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider);
  }
  logoutUser(){
   return this.afauth.auth.signOut;
  }
  isAuth(){
    return this.afauth.authState.pipe(map(auth=>auth))
  }
}