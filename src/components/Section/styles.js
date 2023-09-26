import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
  }

`