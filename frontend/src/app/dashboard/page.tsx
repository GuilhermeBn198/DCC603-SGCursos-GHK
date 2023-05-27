'use client'
import React from 'react'

import { Content } from 'components/Content'
import ProfileButton from 'components/ProfileButton'
import CourseButton from 'components/CourseButton'

import { useGlobal } from 'contexts/global'
import useClasses from 'hooks/useClasses'

const Page = () => {
  const { activeCourse } = useGlobal()

  const { classes } = useClasses()

  return (
    <Content>
      <ProfileButton />
      <h1>Cursos</h1>
      {classes?.map((item) => (
        <CourseButton
          key={item.slug}
          small={!!activeCourse}
          active={activeCourse === item.id}
          {...item}
        />
      ))}
    </Content>
  )
}

export default Page
