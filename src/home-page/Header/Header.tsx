import { useState } from 'react';

import { Modal, AddMovieModal } from '@shared';

import { HeaderTopWrapper } from './HeaderTop';
import { SearchWrapper } from './HeaderSearch';
import { HeaderWrapper } from './Header.styles';
import { MovieDetails } from './MovieDetails';

export const HomePageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <HeaderTopWrapper onAddMovie={() => setIsOpen(true)} />
        {/* <SearchWrapper /> */}
        <MovieDetails></MovieDetails>
      </HeaderWrapper>
      {isOpen && (
        <Modal>
          <AddMovieModal
            onClose={() => setIsOpen(false)}
            onReset={() => null /* todo */}
            onSubmit={() => null /* todo */}
          ></AddMovieModal>
        </Modal>
      )}
    </>
  );
};
