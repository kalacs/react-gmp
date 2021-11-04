import { useDispatch } from 'react-redux';

import { useMovieSearch } from '@api/Movies';

import { fetchMoviesFromAPI } from './movie.slice';

export const useDispatchFetchMovieFromApi = () => {
  const dispatch = useDispatch();
  const movieSearch = useMovieSearch();

  return () => dispatch(fetchMoviesFromAPI(movieSearch));
};
