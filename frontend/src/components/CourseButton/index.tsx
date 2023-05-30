'use client'
import React from 'react'

import dayjs from 'dayjs'

import { useGlobal } from 'contexts/global'

import { SGCLass } from 'hooks/useClasses'

import * as S from './styles'

type CourseButtonProps = {
  sgclass: SGCLass
  small: boolean
  active: boolean
}

const CourseButton = ({ sgclass, small, active }: CourseButtonProps) => {
  const { setActiveClass } = useGlobal()
  const imgProps = small
    ? { width: 125, height: 125 }
    : { width: 324, height: 215 }

  return (
    <S.Container
      $small={small}
      onClick={() => setActiveClass(sgclass)}
      $active={active}
    >
      <S.CouseImageContainer>
        <S.CourseImage
          src={`/${sgclass.course.photo}`}
          alt={sgclass.course.name}
          {...imgProps}
        />
      </S.CouseImageContainer>
      <S.Content>
        <S.Subtitle>{`${sgclass.course.category.name} • ${dayjs().format(
          'DD/MM/YYYY'
        )}`}</S.Subtitle>
        <S.Strong>{sgclass.course.name}</S.Strong>
      </S.Content>
    </S.Container>
  )
}

export default CourseButton
