'use client'
import { styled } from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px;
  padding-top: 54px;

  gap: 24px;
  height: -webkit-fill-available;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-size: 32px;
    font-weight: 600;
  }
`
