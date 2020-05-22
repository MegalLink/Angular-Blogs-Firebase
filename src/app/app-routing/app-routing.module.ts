import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../components/home/home.component'

const routes: Routes = [
 
  {path: '' ,component: HomeComponent},

 
  {path: '**', component: HomeComponent}//POner este siempre al ultimo

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }