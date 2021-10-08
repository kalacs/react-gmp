import { FC } from 'react';

import { MovieCover } from '@shared';

import { MovieWrapper } from './MovieWrapper';
import { MovieProps } from './Movies.models';

export const Movie: FC<MovieProps> = ({ movie, onMovieClick }) => {
  const { coverUrl, genre, releaseDate, title } = movie;

  return (
    <MovieWrapper tabIndex={0} onClick={() => onMovieClick(movie)}>
      <MovieCover src={coverUrl} alt='movie cover' />
      <div className='movie-description-container'>
        <div className='movie-description-heading'>
          <span className='movie-title'>{title}</span>
          <span className='movie-genre'>{genre}</span>
        </div>
        <span className='movie-release-date'>{releaseDate}</span>
      </div>
    </MovieWrapper>
  );
};
