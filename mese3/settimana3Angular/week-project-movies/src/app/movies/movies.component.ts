import { Component, OnInit } from "@angular/core";
import { FetchMoviesService } from "../fetch-movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  movies: any;
  favsArray: any = [];

  constructor(private fetchMoviesSrv: FetchMoviesService) {}

  ngOnInit(): void {
    this.fetchMoviesSrv
      .topRatedMovies()
      .subscribe((res) => (this.movies = res));
    this.fetchMoviesSrv
      .mostPopularMovies()
      .subscribe((res) => this.movies.push(...(res as any)));

    // this.fetchMoviesSrv.getFavs().subscribe((res) => {
    //   this.favsArray = res;
    //   this.favsArray.map((fav: any) => {
    //     const { movieId } = fav;
    //     console.log(movieId);
    //     return movieId;
    //   });
    // });
    // console.log(this.favsArray);
  }
}
