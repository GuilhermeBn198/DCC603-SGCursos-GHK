'use client'

import Link from 'next/link'
import styled, { css } from 'styled-components'

type SidebarContainerProps = {
  $small: boolean
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  ${({ $small }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    background-color: #f8fafc;

    position: relative;

    height: 100vh;
    width: 200px;

    transition: all 0.2s;

    ${$small
      ? css`
          width: 50px;

          ${SidebarLink} {
            padding: 16px;
          }
        `
      : ''}
  `}
`

export const SidebarLink = styled(Link)`
  ${() => css`
    display: flex;
    padding: 16px;
    width: 200px;

    gap: 18px;

    transition: all 0.2s;
    font-size: 16px;
    text-decoration: none;

    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
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
