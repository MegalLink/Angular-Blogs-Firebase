import { Component, OnInit,  } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import {finalize} from 'rxjs/operators'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 
  uploadPercent:Observable<number>;
  urlImage:Observable<string>;
  user:any;
 
  constructor(private authS:AuthService,private afs:AngularFireStorage) { }

  ngOnInit() {
    this.authS.isAuth().subscribe(user=>{
      this.user=user;    
      //console.log("user",this.user)
    })
    
  }
  onUploead(event){
    const id=Math.random().toString(36).substring(2);
    //event.target tiene las propiedades , y en files esta el nombre del fiechero y otros datos como length 
    const file=event.target.files[0];
    const filePath=`profileImages/profile_${id}`
    const ref=this.afs.ref(filePath);
    const task=this.afs.upload(filePath,file);
    this.uploadPercent=task.percentageChanges();
    task.snapshotChanges().pipe(finalize(()=>{
       ref.getDownloadURL().subscribe(url=>{
         this.authS.updateUserInfo(this.user.displayName,url);
       })
     
    })).subscribe();

   
  //  this.authS.updateUserInfo(this.user.displayName,this.inputImageUser.nativeElement.value)
    
  }

}