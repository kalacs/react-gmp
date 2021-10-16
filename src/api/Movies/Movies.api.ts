import axios, { AxiosResponse } from 'axios';

import { API_URL } from './api.constants';
import { Movie, MovieApi, MovieApiResponse } from './Movie.models';

export const fetchMoviesAPI = async (): Promise<MovieApiResponse<Movie[]>> => {
  const apiResponse = await axios.get<
    MovieApiResponse<MovieApi[]>
  >(`${API_URL}/movies`);

  const { data } = apiResponse;

  return {
    ...data,
    data: data.data.map(
      (movie): Movie => ({
        id: movie.id,
        title: movie.title,
        genre: movie.genres,
        coverUrl: movie.poster_path,
        description: movie.tagline,
        rating: movie.vote_average,
        releaseDate: movie.release_date,
        runtime: movie.runtime,
      })
    ),
  };
};

export type fetchMovieType = ReturnType<typeof fetchMoviesAPI>;
