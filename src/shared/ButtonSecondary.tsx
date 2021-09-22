import { FC } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 20px;
  padding: 0.55em 0.9em;
  border-radius: 4px;
  background-color: ${({theme}) => theme.palette.accentVariant};
  border: none;
  opacity: 0.68;
  color: ${({theme}) => theme.palette.primary};
`;

export const ButtonSecondary: FC = (props) => {
  return <Button>{props.children}</Button>;
}
