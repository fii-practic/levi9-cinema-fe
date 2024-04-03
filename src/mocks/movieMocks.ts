import Movie from "../types/movie";
import MovieState from "./../enums/movieState";

const movieMocks: Movie[] = [
  {
    id: "1",
    title: "The Avengers",
    rating: 4.5,
    url: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    state: MovieState.Wishlist,
  },
  {
    id: "2",
    title: "The Avengers: Age of Ultron",
    rating: 4.5,
    url: "https://www.slashfilm.com/wp/wp-content/images/International-Avengers-Age-of-Ultron-Poster-700x989.jpg",
    state: MovieState.Seen,
  },
  {
    id: "3",
    title: "Spider-man",
    rating: 4,
    url: "https://media.vanityfair.com/photos/592592596736887ada186bcd/master/w_1600%2Cc_limit/spider-man-homecoming-SMH_DOM_Online_FNL_1SHT_3DRD3DIMX_AOJ_300dpi_01_rgb.jpg",
    state: MovieState.Wishlist,
  },
  {
    id: "4",
    title: "Harry Potter and The Philosopher's Stone",
    rating: 5,
    url: "https://m.media-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg",
    state: MovieState.Seen,
  },
  {
    id: "5",
    title: "Star Wars The Last Jedi",
    rating: 5,
    url: "https://lumiere-a.akamaihd.net/v1/images/swtlj_imax_oversize_1-sht_v6_lg_d4edae12.jpeg?region=0%2C0%2C827%2C1200",
    state: MovieState.Wishlist,
  },
];

export default movieMocks;
