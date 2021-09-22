import styled from "styled-components";

import { AddMovie } from "./AddMovie";
import { Logo } from "./Logo";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px ${props => props.theme.size.pageHorizontalPadding};
`;

export const HeaderTopWrapper = () => {
  return (
    <Wrapper>
      <Logo />
      <AddMovie />
    </Wrapper>
  );
};
