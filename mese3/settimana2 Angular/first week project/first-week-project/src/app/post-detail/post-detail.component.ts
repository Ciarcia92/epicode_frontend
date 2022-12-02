import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: any;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    // console.log(this.route.queryParams.subscribe(params => {console.log(params);}));
    this.post = history.state.data;
  }

  back(): void {
    this.location.back()
  }

}
