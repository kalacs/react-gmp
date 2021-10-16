import { PureComponent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  moviesSelector,
  MoviesStatus,
  moviesStatusSelector,
  initFetchingMovies,
  moviesLoadingSelector,
} from '@store';
import { LoadingOverlay } from '@shared';

import { ContentWrapper } from './ContentWrapper';

import { ControlsWrapper } from './Controls';
import { MoviesWrapper } from './Movies';
import { SORT_OPTIONS, SortOptions } from './Content.constants';
import { SORT_MAP } from './Content.helpers';
import { ContentState } from './Content.models';

export const Content = () => {
  const dispatch = useDispatch();

  const movies = useSelector(moviesSelector);
  const moviesStatus = useSelector(moviesStatusSelector);
  const moviesLoading = useSelector(moviesLoadingSelector);

  useEffect(() => {
    if (moviesStatus === MoviesStatus.Idle) {
      dispatch(initFetchingMovies());
    }
  }, [moviesStatus, dispatch]);

  return (
    <ContentWrapper>
      <ControlsWrapper
        sortBy={SortOptions.ByTitle}
        options={SORT_OPTIONS}
        optionSelected={() => null}
      />
      <span>
        <b>{movies.length}</b> movies found
      </span>
      <MoviesWrapper movies={movies} />
      {moviesLoading && <LoadingOverlay />}
    </ContentWrapper>
  );
};
