import { Movie, SortOptions } from '@api/Movies';

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
  sortBy: SortOptions;

  status: MoviesStatus;
  error: string | null;
}

export interface Payload<PType> {
  payload: PType;
}
