import styled from "styled-components";

import { AddMovie } from "./AddMovie";
import { Logo } from "./Logo";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.size.pagePadding};
`;

export const HeaderTopWrapper = () => {
  return (
    <Wrapper>
      <Logo />
      <AddMovie />
    </Wrapper>
  );
};
