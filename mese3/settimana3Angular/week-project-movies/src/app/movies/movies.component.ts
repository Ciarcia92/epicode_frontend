import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  movies: any;

  ngOnInit(): void {
    this.httpClient
      .get('http://localhost:3000/movies-toprated')
      .subscribe((response) => {
        this.movies = response;
      });

    this.httpClient
      .get('http://localhost:3000/movies-popular')
      .subscribe((response) => {
        this.movies.push(...(response as any));
        console.log(this.movies);
      });
  }
}
