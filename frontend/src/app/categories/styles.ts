'use client'

import { styled } from "styled-components"

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
`

export const Category = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;

  & + & {
    border-top: 1px solid #EBEBF0;
  }
`