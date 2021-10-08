import { useState, useContext } from 'react';

import { Modal, AddMovieModal, MovieDetailsContext } from '@shared';

import { HeaderTopWrapper } from './HeaderTop';
import { SearchWrapper } from './HeaderSearch';
import { HeaderWrapper } from './Header.styles';
import { MovieDetails } from './MovieDetails';

export const HomePageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { movie, showMovieDetails } = useContext(MovieDetailsContext);

  const isDetailsOpen = !!movie;

  return (
    <>
      <HeaderWrapper isDetailsOpen={isDetailsOpen}>
        <HeaderTopWrapper
          onBackToSearch={() => showMovieDetails(null)}
          showBackToSearchIcon={isDetailsOpen}
          onAddMovie={() => setIsOpen(true)}
        />

        {isDetailsOpen ? (
          <MovieDetails movie={movie}></MovieDetails>
        ) : (
          <SearchWrapper />
        )}
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
