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
  constructor(private authS:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onRegister(){
    this.authS. registerUser(this.email,this.password).then(user=>{
      console.log(user)
      this.router.navigate(['/admin/list-posts']);
    }).catch(err=>{console.error(err)})

  }
}