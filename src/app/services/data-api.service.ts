import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import { PostInterface } from '../models/models.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataApiService {
private postCollection:AngularFirestoreCollection<any>;
private posts:Observable<any[]>
  constructor(private afs:AngularFirestore) { 
     this.postCollection = afs.collection<any>('posts');
     this.posts= this.postCollection.valueChanges();
  }

getAllPosts(){
  //el snapshotChanges es para capturar cuando se haga una modificacions se actualiza solo son recargar la data
 return this.posts=this.postCollection.snapshotChanges().pipe(map(changes=>{
   
  return changes.map(action=>{
    
    const data=action.payload.doc.data();
     data.id=action.payload.doc.id;
     return data;
  })
 }))
}
getLastetPosts(){

}
getPost(){

}
addPost(){

}
updatePost(){

}
deletePost(){

}



}