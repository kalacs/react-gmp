import { Movie } from '@api/Movies';

export interface MoviesProps {
  movies: Movie[]
}

export interface MovieProps {
  movie: Movie;
  onMovieClick: (movie: Movie) => void;
}
