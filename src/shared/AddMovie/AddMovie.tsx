import { PureComponent } from 'react';

import { Label, Input } from '@shared/FormControls';

import { AddMovieForm, MovieDescription } from './AddMovie.styles';
import { AddMovieProps } from './AddMovie.models';

export class AddMovie extends PureComponent<AddMovieProps> {
  render() {
    return (
      <>
        <AddMovieForm>
          <div className='form-left'>
            <Label>
              TITLE
              <Input placeholder='Enter movie title' />
            </Label>
            <Label>
              MOVIE URL
              <Input placeholder='https://' />
            </Label>
            <Label>
              GENRE
              <Input placeholder='should be multi select' />
            </Label>
          </div>
          <div className='form-right'>
            <Label>
              {/*Should be a datepicker. Use input for now*/}
              RELEASE DATE
              <Input placeholder='Select Date' />
            </Label>
            <Label>
              RATING
              <Input placeholder='7.8' />
            </Label>
            <Label>
              RUNTIME
              <Input placeholder='minutes' />
            </Label>
          </div>
        </AddMovieForm>
        <Label style={{ flex: 1 }}>
          OVERVIEW
          <MovieDescription placeholder='Movie description' />
        </Label>
      </>
    );
  }
}
