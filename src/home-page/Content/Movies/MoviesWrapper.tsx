import { FC, useContext } from 'react';

import { MovieDetailsContext } from '@shared';

import { Movie } from './Movie';
import { MoviesProps } from './Movies.models';
import { Wrapper } from './Movies.styles';

export const MoviesWrapper: FC<MoviesProps> = ({ movies }) => {
  const { showMovieDetails } = useContext(MovieDetailsContext);

  return (
    <Wrapper>
      {movies.map((movie) => (
        <Movie onMovieClick={showMovieDetails} movie={movie} key={movie.id} />
      ))}
    </Wrapper>
  );
};
