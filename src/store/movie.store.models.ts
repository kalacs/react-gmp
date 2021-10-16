import { Movie } from '@api/Movies';

export const enum MoviesStatus {
  Loading,
  Idle,
  LoadingFailed,
  LoadingSucceed,
}

export interface MoviesState {
  movies: Movie[];
  limit: number;
  offset: number;
  totalAmount: number;
  status: MoviesStatus;
  error: Error | null;
}

export interface Payload<PType> {
  payload: PType;
}
