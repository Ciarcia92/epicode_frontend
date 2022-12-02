import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Routing';

  constructor(private postSRV:PostService, private userSRV: UsersService) {}

  ngOnInit(): void {
    this.postSRV.fetchData()

    console.log( this.userSRV.getAuthors());
  }
}
