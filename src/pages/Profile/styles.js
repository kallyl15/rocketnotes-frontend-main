import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  > header {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    height: 14.4rem;

    display: flex;
    align-items: center;
    padding-left: 5vw;

    > a {
      font-size: clamp(2.5rem, 2rem + 1.5625vw, 3rem);
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;

export const Form = styled.form`
  width: min(90%, 340px);
  margin: 0 auto;

  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div:nth-child(3) {
    margin-bottom: 1.6rem;
  }

  > button {
    margin-top: 1.6rem;
  }

  > div > input {
    font-family: 'Roboto Slab', serif;

    &::placeholder {
      font-size: 1.4rem;
    }
  }
`;

export const Avatar = styled.div`
  width: clamp(15.6rem, 12.6rem + 9.375vw, 18.6rem);
  height: clamp(15.6rem, 12.6rem + 9.375vw, 18.6rem);

  position: relative;
  margin: -9.3rem auto 2.4rem;

  > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  > label {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    position: absolute;
    right: 7px;
    bottom: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: clamp(3.8rem, 2.8rem + 3.125vw, 4.8rem);
    height: clamp(3.8rem, 2.8rem + 3.125vw, 4.8rem);
    border-radius: 50%;

    cursor: pointer;
    > input {
      display: none;
    }
    > svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      font-size: 2rem;
    }
  }
`;
