import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import { PostInterface } from '../models/models.interface';
import { Observable } from 'rxjs';

@Injectable()
export class DataApiService {
private postCollection:AngularFirestoreCollection<any>;
private posts:Observable<any[]>
  constructor(private afs:AngularFirestore) { 
     this.postCollection = afs.collection<any>('posts');
     this.posts= this.postCollection.valueChanges();
  }

getAllPosts(){
 return this.posts;
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