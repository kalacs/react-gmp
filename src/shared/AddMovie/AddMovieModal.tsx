import { PureComponent } from 'react';

import { ButtonPrimary, ButtonPrimaryOutline } from '@shared';

import { AddMovie } from './AddMovie';
import { AddMovieModalProps } from './AddMovie.models';
import {
  AddMovieHeader,
  AddMovieModalWrapper,
  CloseModal,
  ModalTitle,
  AddMovieActionsWrapper,
  ContentWrapper,
} from './AddMovie.styles';

export class AddMovieModal extends PureComponent<AddMovieModalProps> {
  render() {
    return (
      <AddMovieModalWrapper>
        <AddMovieHeader>
          <ModalTitle>
            {this.props.movie ? 'EDIT MOVIE' : 'ADD MOVIE'}
          </ModalTitle>
          <CloseModal size='24' onClick={this.props.onClose}/>
        </AddMovieHeader>
        <ContentWrapper>
          <AddMovie movie={this.props.movie}></AddMovie>
        </ContentWrapper>
        <AddMovieActionsWrapper>
          <ButtonPrimaryOutline onClick={this.props.onReset}>RESET</ButtonPrimaryOutline>
          <ButtonPrimary onClick={this.props.onSubmit}>SUBMIT</ButtonPrimary>
        </AddMovieActionsWrapper>
      </AddMovieModalWrapper>
    );
  }
}
