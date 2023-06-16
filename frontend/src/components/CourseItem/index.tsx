import React, { useState } from 'react'

import { Pencil, Trash } from '@styled-icons/octicons'

import { Course } from 'hooks/useClasses'

import { IconsWrapper } from 'components/CategoryItem/styles'

import * as S from './styles'
import { useSession } from 'next-auth/react'
import EditCourseModal from 'components/EditCourseModal'
import { Avatar } from '@mui/material'
import { enqueueSnackbar } from 'notistack'

type CourseItemProps = {
  course: Course
  getCourses(): Promise<void>
}

const CourseItem = ({ course, getCourses }: CourseItemProps) => {
  const { data: session } = useSession()

  const [editVisible, setEditVisible] = useState(false)

  const { id, name, photo } = course

  async function deleteCourse() {
    if (session?.user.jwt) {
      await fetch(`${process.env.NEXT_PUBLIC_API}/api/courses/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.jwt}`
        }
      })
        .then((r) => r.json())
        .catch(() =>
          enqueueSnackbar('Falha ao deletar curso', { variant: 'error' })
        )
      getCourses()
    }
  }

  return (
    <>
      <S.Container>
        <IconsWrapper>
          <Avatar alt={name} src={photo} sx={{ width: 64, height: 64 }} />
          {name}
        </IconsWrapper>
        <IconsWrapper>
          <Pencil size={24} onClick={() => setEditVisible(true)} />
          <Trash size={24} style={{ fill: '#f44336' }} onClick={deleteCourse} />
        </IconsWrapper>
      </S.Container>

      <EditCourseModal
        course={course}
        getCourses={getCourses}
        visible={editVisible}
        setVisible={setEditVisible}
      />
    </>
  )
}

export default CourseItem
