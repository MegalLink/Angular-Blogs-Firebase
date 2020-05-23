import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dataS:DataApiService) { }
  
  ngOnInit() {
    this.dataS.getAllPosts().subscribe(res=>{
      console.log(res)
    })
  }

}