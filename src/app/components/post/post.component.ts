import { Component, OnInit,Input } from '@angular/core';
import { PostInterface } from '../../models/models.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post:PostInterface;
  constructor() { }

  ngOnInit() {
  }

}