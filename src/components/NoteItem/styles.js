import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme, isNew }) =>
    isNew ? 'trasparent' : theme.COLORS.BACKGROUND_900};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : `none`};

  height: 5.6rem;
  padding: 0 2rem;
  border-radius: 1rem;


  display: flex;
  align-items: center;

  > input {
    background-color: transparent;
    height: 100%;
    color: #fff;
    font-family: 'Roboto', sans-serif;

    width: 100%;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  > button {
    background: none;
    font-size: 2.4rem;
    color: ${({ isNew, theme }) =>
      isNew ? `${theme.COLORS.ORANGE}` : `${theme.COLORS.RED}`};
  }
`;
