export enum MovieGenre {
  ActionAdventure = 'Action & Adventure',
  Drama = 'Drama',
  Biography = 'Biography',
  Music = 'Music',
  OscarWining = 'Oscar Wining',
}

export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  genre: MovieGenre[];
  coverUrl: string;
  rating: number;
  runtime: number;
  description: string;
}

export interface MovieApi {
  id: number;
  budget: number;
  genres: MovieGenre[];
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieApiResponse<T> {
  data: T;
  limit: number;
  offset: number;
  totalAmount: number;
}
