import { Component, OnInit } from "@angular/core";
import { FetchMoviesService } from "../fetch-movies.service";

@Component({
  selector: "app-top-rated",
  templateUrl: "./top-rated.component.html",
  styleUrls: ["./top-rated.component.scss"],
})
export class TopRatedComponent implements OnInit {
  movies: any;

  constructor(private fetchMoviesSrv: FetchMoviesService) {}

  ngOnInit(): void {
    this.fetchMoviesSrv
      .topRatedMovies()
      .subscribe((res) => (this.movies = res));
  }
}
