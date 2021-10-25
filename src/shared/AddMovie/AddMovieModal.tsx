import { PureComponent, FC } from 'react';
import { useFormik } from 'formik';

import { Movie } from '@api/Movies';

import { ButtonPrimary, ButtonPrimaryOutline } from '@shared';
import { CloseModal, ModalTitle, ModalHeader } from '@shared/Modal';

import { AddMovie } from './AddMovie';
import { AddMovieModalProps } from './AddMovie.models';
import {
  AddMovieModalWrapper,
  AddMovieActionsWrapper,
  ContentWrapper,
} from './AddMovie.styles';

export const AddMovieModal: FC<AddMovieModalProps> = ({
  movie,
  onClose,
  onSubmit,
}) => {
  const defaultMovie = {} as Movie;
  const formik = useFormik<Movie>({
    initialValues: movie || defaultMovie,
    onSubmit(movie) {
      onSubmit(movie);
    },
  });

  return (
    <AddMovieModalWrapper>
      <ModalHeader>
        <ModalTitle>{movie ? 'EDIT MOVIE' : 'ADD MOVIE'}</ModalTitle>
        <CloseModal size='24' onClick={onClose} />
      </ModalHeader>
      <ContentWrapper>
        <AddMovie movie={movie} formik={formik}></AddMovie>
      </ContentWrapper>
      <AddMovieActionsWrapper>
        <ButtonPrimaryOutline>RESET</ButtonPrimaryOutline>
        <ButtonPrimary
          type='submit'
          disabled={!formik.isValid}
          onClick={() => formik.submitForm()}
        >
          SUBMIT
        </ButtonPrimary>
      </AddMovieActionsWrapper>
    </AddMovieModalWrapper>
  );
};
