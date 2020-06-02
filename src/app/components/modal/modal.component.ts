import { Component, OnInit } from '@angular/core';
import { PostInterface,UserInterface } from '../../models/models.interface';
import {NgForm} from '@angular/forms'
import { DataApiService } from '../../services/data-api.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
post:PostInterface={
  
photoUrl:"",
  autor:"",  titulo:"",
  contenido:"",
  fecha:"",
  idAutor:""
}
  constructor(private dataApi:DataApiService,private authS:AuthService) { 
   this.authS.isAuth().subscribe((user:UserInterface)=>{
     console.log(user.displayName)
      this.post.autor=user.displayName;
      this.post.idAutor=user.uid;
      this.post.fecha=this.setDate();
    })
  }

  ngOnInit() {
    
  }

  setDate():string{
const d = new Date();
const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
const todayDate=`${day}-${month}-${year}`;
return todayDate;

  }
onSavePost(){
this.dataApi.addPost(this.post);
}



}