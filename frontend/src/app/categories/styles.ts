'use client'

import { styled } from "styled-components"

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
`

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
    fill: #f44336;
  }
`

export const CreateCategoryWrapper = styled.form`
  display: flex;
  align-items: center;

  gap: 0.8rem;
`