import { FC } from 'react';
import styled from 'styled-components';

import { FlexColumnContainer } from '@shared';

const Wrapper = styled(FlexColumnContainer)`
  max-height: 680px;
  background-image: ${({ theme }) => theme.urls.headerBackground};
`;

export const HeaderWrapper: FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
