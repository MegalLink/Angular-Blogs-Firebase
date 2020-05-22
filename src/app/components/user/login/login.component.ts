import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authS:AuthService,private router:Router) { }

  ngOnInit() {
  }
 
 onLoginGoogle(){
   this.authS.loginGoogleUser().then((res)=>{
     console.log("Lgeado",res)
     this.router.navigate(['/admin/list-posts'])
   }).catch(err=>{console.log("ERROR",err)})
 }
}