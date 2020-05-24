import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import { UserInterface } from '../models/models.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class UsersApiService {
private userCollection:AngularFirestoreCollection<any>;
private users:Observable<any[]>
  constructor(private afs:AngularFirestore) { 
     this.userCollection = afs.collection<any>('posts');
     this.users= this.userCollection.valueChanges();
  }

getAllUsers(){
  //el snapshotChanges es para capturar cuando se haga una modificacions se actualiza solo son recargar la data
 return this.users=this.userCollection.snapshotChanges().pipe(map(changes=>{
   
  return changes.map(action=>{
    
    const data=action.payload.doc.data();
     data.id=action.payload.doc.id;
     return data;
  })
 }))
}

}