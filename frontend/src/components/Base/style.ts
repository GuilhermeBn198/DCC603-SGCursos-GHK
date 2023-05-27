'use client'

import styled, { css } from 'styled-components'

type ContainerProps = {
  $hasActiveCourse: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ $hasActiveCourse }) => css`
    display: grid;

    height: 100vh;
    grid-template-columns: 20rem auto 30rem;

    ${$hasActiveCourse && css`
      grid-template-columns: 5rem 3fr 3fr;
    `}
  `}
`

export const Main = styled.main`
  width: 100%;
`
