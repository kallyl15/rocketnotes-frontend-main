import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  width: 100%;
  padding: 1.6rem 2.2rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;

  text-align: start;

  > h1 {
    font-size: clamp(1.4rem, 0.4rem + 3.125vw, 2.4rem);
    margin-bottom: 2.4rem;
    font-weight: 700;
  }
  > footer {
    width: 100%;
    display: flex;
    overflow: auto;
    padding-bottom: 0.5rem;

    ::-webkit-scrollbar {
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }

  &:not(&:last-of-type) {
    margin-bottom: 1.6rem;
  }
`;
