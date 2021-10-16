import { call, put, takeLatest, delay } from 'redux-saga/effects';

import { fetchMoviesAPI, fetchMovieType } from '@api/Movies';
import {
  initFetchingMovies,
  fetchMoviesFailure,
  fetchMoviesSucceed,
} from './movie.slice';

function* fetchMovies() {
  try {
    yield delay(Math.random() * 2_000); // slight delay in loading to simulate network
    const moviesResponse: Awaited<fetchMovieType> = yield call(fetchMoviesAPI);
    yield put(fetchMoviesSucceed(moviesResponse));
  } catch (e) {
    yield put(fetchMoviesFailure(e as Error));
  }
}

export function* rootSaga() {
  yield takeLatest(initFetchingMovies.type, fetchMovies);
}
