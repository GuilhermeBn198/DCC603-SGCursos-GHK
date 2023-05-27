'use client'

import styled, { css } from 'styled-components'

type ContainerProps = {
  $hasActiveCourse: boolean
}

export const Container = styled.div<ContainerProps>`
  ${({ $hasActiveCourse }) => css`
    display: grid;

    height: 100vh;
    grid-template-columns: 200px auto 300px;

    ${$hasActiveCourse && css`
      grid-template-columns: 50px 3fr 3fr;
    `}
  `}
`

export const Main = styled.main`
  width: 100%;
`
