import { FC, useEffect } from 'react';
import {
  useHistory,
  useLocation,
} from 'react-router-dom';

import { MovieGenre, useMovieSearch } from '@api/Movies';

import { ButtonBase } from '@shared';

import { CategoryControlsProps } from './Controls.models';

export const CategoryControls: FC<CategoryControlsProps> = ({
  onGenreFilterChange,
}) => {
  const history = useHistory();
  const params = useLocation();
  const { genre: selectedGenre } = useMovieSearch();
  const searchParams = new URLSearchParams(params.search);
  let activeBtn: HTMLButtonElement | null = null;

  useEffect(() => {
    activeBtn &&
      onGenreFilterChange({
        widthPx: activeBtn.clientWidth,
        leftOffsetPx: activeBtn.offsetLeft,
      });
  }, []);

  return (
    <>
      <ButtonBase
        key='ALL'
        className='category-button'
        onClick={(e) => {
          searchParams.delete('genre');

          history.replace({
            search: searchParams.toString(),
          });

          const target = e.target as HTMLElement;
          onGenreFilterChange({
            widthPx: target.clientWidth,
            leftOffsetPx: target.offsetLeft,
          });
        }}
      >
        ALL
      </ButtonBase>
      {Object.values(MovieGenre).map((genre) => {
        return (
          <ButtonBase
            className='category-button'
            key={genre}
            ref={(element) => {
              if (selectedGenre === genre) {
                activeBtn = element;
              }
            }}
            onClick={(e) => {
              searchParams.set('genre', genre);
              history.replace({
                search: searchParams.toString(),
              });

              const target = e.target as HTMLElement;
              onGenreFilterChange({
                widthPx: target.clientWidth,
                leftOffsetPx: target.offsetLeft,
              });
            }}
          >
            {genre.toUpperCase()}
          </ButtonBase>
        );
      })}
    </>
  );
};
