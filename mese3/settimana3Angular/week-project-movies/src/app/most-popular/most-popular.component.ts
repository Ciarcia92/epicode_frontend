import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.scss'],
})
export class MostPopularComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  movies: any;

  ngOnInit(): void {
    this.httpClient
      .get('http://localhost:3000/movies-popular')
      .subscribe((response) => {
        this.movies = response;
      });
  }
}
