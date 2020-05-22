import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  app_name="App Blog";
  isLogged=false;
  constructor(private authS:AuthService) { 

  }

  ngOnInit() {
    this.authS.isAuth().subscribe(user=>{
      console.log(user)
      if(user){
 this.isLogged=true;
      }else{
        this.isLogged=false;
      }
     
    })
  }

  onLogout(){
    this.authS.logoutUser();
    this.isLogged=false;
  }


}