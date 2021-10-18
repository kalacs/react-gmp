import { useDispatch, useSelector } from 'react-redux';

import { MovieGenre } from '@api/Movies';
import { moviesFilterByGenreSelector, filterByGenre } from '@store';

import { ButtonBase } from '@shared';

export const CategoryControls = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ButtonBase
        key='ALL'
        className='category-button'
        onClick={() => dispatch(filterByGenre(null))}
      >
        ALL
      </ButtonBase>
      {Object.values(MovieGenre).map((genre) => (
        <ButtonBase
          className='category-button'
          key={genre}
          onClick={() => dispatch(filterByGenre(genre))}
        >
          {genre.toUpperCase()}
        </ButtonBase>
      ))}
    </>
  );
};
