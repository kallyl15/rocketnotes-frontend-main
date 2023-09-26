import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  width: 100%;
  height: 5.6rem;
  padding: 0 1.6rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};

  }

  > input {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto', sans-serif;
    
    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
