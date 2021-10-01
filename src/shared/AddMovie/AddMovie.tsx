import { PureComponent } from 'react';

import { Label, Input } from '@shared/FormControls';

import { AddMovieForm, MovieDescription } from './AddMovie.styles';
import { AddMovieProps } from './AddMovie.models';

export class AddMovie extends PureComponent<AddMovieProps> {
  render() {
    const {
      coverUrl,
      description,
      genre,
      rating,
      releaseDate,
      runtime,
      title,
    } = this.props?.movie || {};

    return (
      <>
        <AddMovieForm>
          <div className='form-left'>
            <Label>
              TITLE
              <Input value={title} placeholder='Enter movie title' />
            </Label>
            <Label>
              MOVIE URL
              <Input value={coverUrl} placeholder='https://' />
            </Label>
            <Label>
              GENRE
              <Input value={genre} placeholder='should be multi select' />
            </Label>
          </div>
          <div className='form-right'>
            <Label>
              {/*Should be a datepicker. Use input for now*/}
              RELEASE DATE
              <Input readOnly value={releaseDate} placeholder='Select Date' />
            </Label>
            <Label>
              RATING
              <Input value={rating} placeholder='7.8' />
            </Label>
            <Label>
              RUNTIME
              <Input value={runtime} placeholder='minutes' />
            </Label>
          </div>
        </AddMovieForm>
        <Label style={{ flex: 1 }}>
          OVERVIEW
          <MovieDescription
            value={description}
            placeholder='Movie description'
          />
        </Label>
      </>
    );
  }
}
