'use client'
import React from 'react'

import dayjs from 'dayjs'

import { useGlobal } from 'contexts/global'

import { Class } from 'hooks/useClasses'

import * as S from './styles'

type CourseButtonProps = {
  small: boolean
  active: boolean
} & Class

const CourseButton = ({ id, course, small, active }: CourseButtonProps) => {
  const { setActiveCourse } = useGlobal()
  const imgProps = small
    ? { width: 125, height: 125 }
    : { width: 324, height: 215 }

  return (
    <S.Container
      $small={small}
      onClick={() => setActiveCourse(id)}
      $active={active}
    >
      <S.CouseImageContainer>
        <S.CourseImage
          src={`/${course.photo}`}
          alt={course.name}
          {...imgProps}
        />
      </S.CouseImageContainer>
      <S.Content>
        <S.Subtitle>{`Categoria • ${dayjs().format('DD/MM/YYYY')}`}</S.Subtitle>
        <S.Strong>{course.name}</S.Strong>
      </S.Content>
    </S.Container>
  )
}

export default CourseButton
