import styled from "styled-components";

export const Container = styled.button`
  background-color: transparent;
  color: ${({theme, isActive}) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
`