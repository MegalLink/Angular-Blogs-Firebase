import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public email:string="";
public password:string="";
  constructor(private authS:AuthService,private router:Router) { }

  ngOnInit() {
  }
onLogin(){
   this.authS.loginEmailUser(this.email,this.password).then(res=>{
    this.onRedirect('/admin/list-posts')
   }).catch(err=>console.error(err.message))
 }
 onLoginGoogle(){
   this.authS.loginGoogleUser().then((res)=>{
    
     this.onRedirect('/admin/list-posts')
   }).catch(err=>{console.error("ERROR",err.message)})
 }

  onRedirect(ruta:string){
    this.router.navigate([ruta])
  }

}