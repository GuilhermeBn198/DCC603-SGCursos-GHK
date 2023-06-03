import React from 'react'

import { Avatar } from '@nextui-org/react'
import { Pencil, Trash } from '@styled-icons/octicons'

import { Course } from 'hooks/useClasses'

import { IconsWrapper } from 'components/CategoryItem/styles'

import * as S from './styles'

const CourseItem = ({ name, photo }: Course) => {
  return (
    <S.Container>
      <IconsWrapper>
        <Avatar src={photo} size="xl" />
        {name}
      </IconsWrapper>
      <IconsWrapper>
        <Pencil size={24} />
        <Trash size={24} style={{ fill: '#f44336' }} />
      </IconsWrapper>
    </S.Container>
  )
}

export default CourseItem
