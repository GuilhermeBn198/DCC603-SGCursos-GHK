import React from 'react'

import { Avatar } from '@nextui-org/react'
import { Pencil, Trash } from '@styled-icons/octicons'

import { Course } from 'hooks/useClasses'

import { IconsWrapper } from 'components/CategoryItem/styles'

import * as S from './styles'
import { useSession } from 'next-auth/react'

type CourseItemProps = {
  getCourses(): Promise<void>
} & Course

const CourseItem = ({ id, name, photo, getCourses }: CourseItemProps) => {
  const { data: session } = useSession()

  async function deleteCourse() {
    if (session?.user.jwt) {
      await fetch(`http://localhost:5050/api/courses/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.jwt}`
        }
      })
      getCourses()
    }
  }

  return (
    <S.Container>
      <IconsWrapper>
        <Avatar src={photo} size="xl" />
        {name}
      </IconsWrapper>
      <IconsWrapper>
        <Pencil size={24} />
        <Trash size={24} style={{ fill: '#f44336' }} onClick={deleteCourse} />
      </IconsWrapper>
    </S.Container>
  )
}

export default CourseItem
