import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  line-height: 0;
  font-weight: 500;

  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;

  &:disabled {
    opacity: 0.5;
    cursor: wait;

    &:hover {
      filter: none;
    }
  }

`
