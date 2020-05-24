import { Component, OnInit, Input } from '@angular/core';
import { PostInterface } from '../../models/models.interface';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input() posts:PostInterface[];
  constructor() { }
  
  ngOnInit() {
   
  }

}