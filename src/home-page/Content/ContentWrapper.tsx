import styled from 'styled-components';

export const ContentWrapper = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.size.pageVerticalPadding}
    ${({ theme }) => theme.size.pageHorizontalPadding} 10px;

  background-color: ${({ theme }) => theme.palette.accent};
`;
