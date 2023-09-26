import styled from 'styled-components';

export const Container = styled.span`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  
  line-height: 0;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
 
  min-width: 6.4rem;
  height: 2.4rem;
  padding: 5px 1.4rem;
  border-radius: 5px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  
  &:not(&:last-of-type) {
    margin-right: 0.6rem;

  }
`;
