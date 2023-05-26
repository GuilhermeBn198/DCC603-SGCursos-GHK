'use client'
import React from 'react'

import ProfileButton from 'components/ProfileButton'
import CourseButton from 'components/CourseButton'

import * as S from './styles'
import { useGlobal } from 'contexts/global'
import useClasses from 'hooks/useClasses'

const Page = () => {
  const { activeCourse } = useGlobal()

  const { classes } = useClasses()

  return (
    <S.Container>
      <ProfileButton />

      <S.Title>Cursos</S.Title>

      {classes?.map((item) => (
        <CourseButton key={item.slug} small={!!activeCourse} active={activeCourse === item.id} {...item} />
      ))}
    </S.Container>
  )
}

export default Page
