'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'

type SidebarContainerProps = {
  small: boolean
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  ${({ small }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    background-color: #f8fafc;

    position: relative;

    height: 100vh;
    width: 20rem;

    transition: all 0.2s;

    ${small
      ? css`
          width: 5rem;

          ${SidebarLink} {
            padding: 1.6rem;
          }
        `
      : ''}
  `}
`

export const SidebarLink = styled(Link)`
  ${() => css`
    display: flex;
    padding: 1.6rem;
    width: 20rem;

    gap: 1.8rem;

    transition: all 0.2s;
    font-size: 1.6rem;
    text-decoration: none;

    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    p {
      transition: all 0.2s;
    }

    &:hover {
      background-color: #f1f5f9;
      border-left: 0.1rem solid #0f172a;
    }
  `}
`
