import { Component, OnInit } from "@angular/core";
import { DataApiService } from "../../services/data-api.service";
import { PostInterface } from "../../models/models.interface";
import { Params, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details-post",
  templateUrl: "./details-post.component.html",
  styleUrls: ["./details-post.component.css"]
})
export class DetailsPostComponent implements OnInit {
  public post: PostInterface;
  constructor(private dataS: DataApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    let idPost = "";
    this.route.params.subscribe(resp => {
      idPost = resp.id;
    });

    this.dataS.getPost(idPost).subscribe(post => {
      this.post = post;
    });
  }
}
