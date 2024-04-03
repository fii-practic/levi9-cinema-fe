import MovieState from "../enums/movieState";

type Movie = {
  id?: string;
  title: string;
  rating: number;
  url: string;
  state: MovieState;
}

export default Movie;