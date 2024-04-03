import { makeAutoObservable } from "mobx";
import Movie from "./../../types/movie";
import movieMocks from "./../../mocks/movieMocks";
import MovieState from "../../enums/movieState";

class MoviesStore {
  public movies: Movie[] = [];
  public movieTitles: string[] = [];

  constructor() {
    makeAutoObservable(this);
    this.getMovies();
    this.getMovieTitles();
  }

  public getMovies = (title?: string, movieState?: string) => {
    let movies = [...movieMocks.map((x) => ({ ...x }))];

    if (title) {
      movies = movies.filter((movie) =>
        movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      );
    }

    if (movieState) {
      const state = MovieState[movieState as keyof typeof MovieState];
      movies = movies.filter((movie) => movie.state === state);
    }

    this.movies = movies;
  };

  public getMovieTitles = () => {
    this.movieTitles = this.movies.map((movie) => movie.title);
  };

  public setMovies = (movies: Movie[]) => {
    this.movies = movies;
  };
}

export default MoviesStore;
