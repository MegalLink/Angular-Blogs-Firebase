import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string="";
  password:string="";
  displayName:string="";
  photoURL:string="https://www.jumpstarttech.com/files/2018/08/Network-Profile.png";
  constructor(private authS:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onRegister(){
    this.authS. registerUser(this.email,this.password).then(user=>{
     this.authS.updateUserInfo(this.displayName,this.photoURL)
      this.router.navigate(['/admin/list-posts']);
    }).catch(err=>{console.error(err)})

  }
}