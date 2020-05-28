import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { PostInterface } from '../../models/models.interface';
@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

ata:PostInterface[];
  constructor(private dataS:DataApiService) {
    this.dataS.getAllPosts().subscribe((resp:PostInterface[])=>{
      this.data=resp
      
    })
  }

  ngOnInit() {
  }

}