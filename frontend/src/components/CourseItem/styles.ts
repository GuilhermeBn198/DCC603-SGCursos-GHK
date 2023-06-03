import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.8rem 0;

  & + & {
    border-top: 1px solid #EBEBF0;
  }

  svg {
    cursor: pointer;
  }
`