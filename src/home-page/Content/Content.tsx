import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useMovieSearch } from '@api/Movies';

import {
  moviesSelector,
  moviesLoadingSelector,
  moviesErrorSelector,
  moviesTotalSelector,
  moviesSortBySelector,
  sortMoviesBy,
  useDispatchFetchMovieFromApi,
} from '@store';
import { LoadingOverlay, Error } from '@shared';

import { ContentWrapper } from './ContentWrapper';

import { ControlsWrapper } from './Controls';
import { MoviesWrapper } from './Movies';
import { SORT_OPTIONS } from './Content.constants';

export const Content = () => {
  const dispatch = useDispatch();
  const { searchQuery, genre } = useMovieSearch();
  const dispatchFetchMovies = useDispatchFetchMovieFromApi();

  const movies = useSelector(moviesSelector);
  const moviesLoading = useSelector(moviesLoadingSelector);
  const moviesError = useSelector(moviesErrorSelector);
  const moviesTotal = useSelector(moviesTotalSelector);
  const moviesSortBy = useSelector(moviesSortBySelector);

  useEffect(() => {
    dispatchFetchMovies();
  }, [dispatch, moviesSortBy, searchQuery, genre]);

  return (
    <ContentWrapper>
      <ControlsWrapper
        sortBy={moviesSortBy}
        options={SORT_OPTIONS}
        optionSelected={(sortBy) => dispatch(sortMoviesBy(sortBy))}
      />
      <span>
        <b>{moviesTotal}</b> movies found
      </span>
      {moviesError && <Error>{moviesError}</Error>}
      <MoviesWrapper movies={movies} />
      {moviesLoading && <LoadingOverlay />}
    </ContentWrapper>
  );
};
