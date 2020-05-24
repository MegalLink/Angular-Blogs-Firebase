import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
data:any;
  constructor(private dataS:DataApiService) {
    this.dataS.getAllPosts().subscribe(resp=>{
      this.data=resp
    })
  }

  ngOnInit() {
  }

}