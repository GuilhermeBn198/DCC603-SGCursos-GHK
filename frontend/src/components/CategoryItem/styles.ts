import { styled } from "styled-components";

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;

  & + & {
    border-top: 1px solid #EBEBF0;
  }

  svg {
    cursor: pointer;
  }
`

export const IconsWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`