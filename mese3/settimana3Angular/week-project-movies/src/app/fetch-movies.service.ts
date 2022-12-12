import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FetchMoviesService {
  movies: any = [];
  userID: number = 0;
  favs: any = [];

  constructor(private httpClient: HttpClient) {}

  topRatedMovies() {
    return this.httpClient.get("http://localhost:3000/movies-toprated").pipe(
      tap((res) => {
        this.movies = res;
      })
    );
  }

  mostPopularMovies() {
    return this.httpClient.get("http://localhost:3000/movies-popular").pipe(
      tap((res) => {
        this.movies = res;
      })
    );
  }

  getFavs() {
    const userLogged = JSON.parse(localStorage.getItem("user") as string);
    const { user } = userLogged;
    this.userID = user.id;
    return this.httpClient
      .get(`http://localhost:4201/favorites?userId=${this.userID}`)
      .pipe(
        tap((res) => {
          this.favs = res;
          console.log(this.favs);
        })
      );
  }
}
