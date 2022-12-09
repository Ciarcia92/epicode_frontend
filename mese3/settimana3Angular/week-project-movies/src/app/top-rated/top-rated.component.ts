import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  constructor(private httpClient: HttpClient) {}
  movies: any;

  ngOnInit(): void {
    this.httpClient
      .get('http://localhost:3000/movies-toprated')
      .subscribe((response) => {
        this.movies = response;
      });
  }

}
