import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { PostInterface } from '../../models/models.interface';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
data:PostInterface[];
  constructor(private dataS:DataApiService) {
    this.dataS.getAllPosts().subscribe((resp:PostInterface[])=>{
      this.data=resp
      
    })
  }

  ngOnInit() {
  }

}