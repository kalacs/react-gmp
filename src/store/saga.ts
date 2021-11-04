import { call, put, takeLatest, delay, select } from 'redux-saga/effects';
import { isAxiosError } from '@types';

import {
  fetchMoviesAPI,
  fetchMovieType,
  SearchByOption,
  SearchMovieUrlParams,
  FetchMovieParams,
} from '@api/Movies';
import {
  fetchMoviesFromAPI,
  fetchMoviesFailure,
  fetchMoviesSucceed,
  movieStateSelector,
} from './movie.slice';
import { MoviesState, Payload } from './movie.store.models';

function* fetchMovies(params: Payload<SearchMovieUrlParams>) {
  const { payload } = params;

  try {
    yield delay(Math.random() * 2_000); // slight delay in loading to simulate network
    const { sortBy }: MoviesState = yield select(movieStateSelector);

    const fetchParams: FetchMovieParams = {
      sortBy,
      search: payload.searchQuery ? payload.searchQuery : void 0,
      sortOrder: 'asc',
      searchBy: SearchByOption.ByTitle,
      limit: 9,
      filter: payload.genre ? [payload.genre] : void 0,
    };

    const moviesResponse: Awaited<fetchMovieType> = yield call(
      fetchMoviesAPI,
      fetchParams
    );

    yield put(fetchMoviesSucceed(moviesResponse));
  } catch (e) {
    let errMessage = isAxiosError(e) ? e.message : 'Something went wrong';

    yield put(fetchMoviesFailure(errMessage));
  }
}

export function* rootSaga() {
  yield takeLatest(fetchMoviesFromAPI.type, fetchMovies);
}
