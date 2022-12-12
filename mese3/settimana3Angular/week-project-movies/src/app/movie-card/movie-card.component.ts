import { Component, Input, OnInit } from "@angular/core";
import { FetchMoviesService } from "../fetch-movies.service";

@Component({
  selector: "app-movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"],
})
export class MovieCardComponent implements OnInit {
  @Input("movie") movie: any;
  @Input("movies") movies: any;
  favs: any = [];

  constructor(private fetchMoviesSrv: FetchMoviesService) {}

  ngOnInit(): void {}
}
