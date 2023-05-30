'use client'
import React from 'react'

import { Content } from 'components/Content'
import ProfileButton from 'components/ProfileButton'
import CourseButton from 'components/CourseButton'

import { useGlobal } from 'contexts/global'
import useClasses from 'hooks/useClasses'

const Page = () => {
  const { activeClass } = useGlobal()
  const { classes } = useClasses()

  return (
    <Content>
      <ProfileButton />
      <h1>Cursos</h1>
      {classes?.map((sgclass) => (
        <CourseButton
          key={sgclass.id}
          small={!!activeClass}
          sgclass={sgclass}
          active={activeClass?.id === sgclass.id}
        />
      ))}
    </Content>
  )
}

export default Page
