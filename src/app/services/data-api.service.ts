import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore'
import { PostInterface } from '../models/models.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataApiService {
//Para toda la coleccion
private postCollection:AngularFirestoreCollection<PostInterface>;
private posts:Observable<PostInterface[]>
//Para un documento
private postDoc:AngularFirestoreDocument<PostInterface>;
private post:Observable<PostInterface>;

  constructor(private afs:AngularFirestore) { 
     this.postCollection = afs.collection<PostInterface>('posts');
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
 const latest=[];
 this.getAllPosts().subscribe((posts:PostInterface[])=>{
   posts.filter(post=>{
     if(post.fecha==new Date().toISOString().substring(0, 10)){
       
     }
   })
 })
} 
getPost(idPost:string){
this.postDoc=this.afs.doc<PostInterface>(`posts/${idPost}`);
return this.post=this.postDoc.snapshotChanges().pipe(map(action=>{
if(action.payload.exists==false){
  return null;
}else{
  const data=action.payload.data() as PostInterface;
  data.id = action.payload.id;
  return data;
}
}))
}
addPost(){

}
updatePost(){

}
deletePost(){

}



}