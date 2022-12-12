import { Component, OnInit } from "@angular/core";
import { FetchMoviesService } from "../fetch-movies.service";

@Component({
  selector: "app-most-popular",
  templateUrl: "./most-popular.component.html",
  styleUrls: ["./most-popular.component.scss"],
})
export class MostPopularComponent implements OnInit {
  movies: any;

  constructor(private fetchMoviesSrv: FetchMoviesService) {}

  ngOnInit(): void {
    this.fetchMoviesSrv
      .mostPopularMovies()
      .subscribe((res) => (this.movies = res));
  }
}
