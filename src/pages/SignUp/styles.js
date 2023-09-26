import styled from 'styled-components';

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: stretch;

  > div:last-child {
    width: 63.7rem;
    display: flex;
    justify-content: center;


    @media (max-width: 40em) {
      & {
        width: 100vw;
      }
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: min(90%, 340px);
  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: clamp(3.2rem, 1.6rem + 5vw, 4.8rem);
    font-weight: 700;
  }

  > h1 + p {
    font-size: clamp(1.2rem, 1rem + 0.625vw, 1.4rem);
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    margin: 4rem 0;
    font-size: clamp(2rem, 1.6rem + 1.25vw, 2.4rem);
  }

  > div > input {
    font-family: 'Roboto Slab', serif;
  }
  > div:not(div:last-of-type) {
    margin-bottom: 0.8rem;
    background-attachment: fixed;
  }

  > button:first-of-type {
    margin: 2.4rem 0 4.8rem;
  }
`;
