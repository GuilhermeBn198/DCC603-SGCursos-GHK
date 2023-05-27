'use client'
import React from 'react'

import { Button } from '@nextui-org/react'

import { Content } from 'components/Content'

import * as S from './styles'

const Categories = () => {
  return (
    <Content>
      <h1>Categories</h1>

      <Button size="sm" style={{ width: 'fit-content' }}>
        Criar categoria
      </Button>

      <S.CategoryList>
        <S.Category>Development</S.Category>
        <S.Category>Business</S.Category>
        <S.Category>Finance & Accounting</S.Category>
        <S.Category>IT & Software</S.Category>
        <S.Category>Office Productivity</S.Category>
        <S.Category>Design</S.Category>
        <S.Category>Marketing</S.Category>
        <S.Category>Lifestyle</S.Category>
        <S.Category>Photography & Video</S.Category>
        <S.Category>Health & Fitness</S.Category>
        <S.Category>Music</S.Category>
        <S.Category>Teaching & Academics</S.Category>
      </S.CategoryList>
    </Content>
  )
}

export default Categories
