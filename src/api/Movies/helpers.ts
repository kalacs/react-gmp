import { useParams } from 'react-router-dom';

import { Movie, MovieApi, SearchMovieUrlParams } from './Movie.models';

export function movieApiToMovie(movie: MovieApi): Movie {
  return {
    id: movie.id,
    title: movie.title,
    genre: movie.genres,
    coverUrl: movie.poster_path,
    description: movie.overview,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    runtime: movie.runtime,
  };
}

export function movieToMovieApi(movie: Movie): Partial<MovieApi> {
  return {
    id: movie.id,
    title: movie.title,
    genres: movie.genre,
    poster_path: movie.coverUrl,
    overview: movie.description,
    vote_average: movie.rating,
    release_date: movie.releaseDate,
    runtime: movie.runtime,
  };
}

export function isSearchMovieUrl(params: any): params is SearchMovieUrlParams {
  return !!(params as SearchMovieUrlParams).searchQuery;
}

export function useMovieSearch(): string {
  const params = useParams();
  return isSearchMovieUrl(params) && params.searchQuery ? params.searchQuery : '';
}
