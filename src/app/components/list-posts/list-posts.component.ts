import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { PostInterface } from '../../models/models.interface';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
private posts:PostInterface[];
  constructor(private dataS:DataApiService) {
    
  }

  ngOnInit() {
    this.getListPost();
  }
  getListPost()
  {
    this.dataS.getAllPosts().subscribe(posts=>{
      this.posts=posts;
    })
  }
  onDeletePost(){
    console.log("delete post");
  }



}