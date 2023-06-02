import { styled } from "styled-components";

export const Class = styled.div`
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