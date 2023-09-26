import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5vw;
  height: 10.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 50%;
  }

  > div {
    > span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    p {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: clamp(1.6rem, 1.4rem + 0.625vw, 1.8rem);
      font-weight: 700;
    }
  }
`;

export const Logout = styled.button`
  background: none;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  > svg {
    font-size: 3.6rem;
  }
`;
