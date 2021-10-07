import { FC } from 'react';

import { Logo } from '@shared';

import { HeaderTopProps } from './HeaderTop.models';
import { Wrapper, BackToSearch, AddMovie } from './HeaderTop.styles';

export const HeaderTopWrapper: FC<HeaderTopProps> = ({ onAddMovie }) => {
  return (
    <Wrapper>
      <Logo />
      {/* <AddMovie onClick={onAddMovie}> + ADD MOVIE </AddMovie> */}
      <BackToSearch size="24"></BackToSearch>
    </Wrapper>
  );
};
// todo add flag
