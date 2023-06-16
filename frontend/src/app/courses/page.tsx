'use client'
import React, { useEffect, useState } from 'react'

import { Button } from '@mui/material'
import { useSession } from 'next-auth/react'

import { Course } from 'hooks/useClasses'

import { Content } from 'components/Content'
import CourseItem from 'components/CourseItem'
import CreateCourseModal from 'components/CreateCourseModal'

import * as S from './styles'
import CreateTaskModal from 'components/CreateTaskModal'

export interface CoursesResponse {
  data: Course[]
  errors: any[]
}

const Index = () => {
  const { data: session } = useSession()

  const [courses, setCourses] = useState<Course[]>()
  const [createCourseModalVisible, setCreateCourseModalVisible] =
    useState(false)
  const [createTaskModalVisible, setCreateTaskModalVisible] = useState(false)

  async function getCourses() {
    if (session?.user.jwt) {
      const response: CoursesResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/courses`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          }
        }
      ).then((r) => r.json())
      setCourses(response.data)
    }
  }

  useEffect(() => {
    getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user.jwt])

  return (
    <>
      <Content>
        <h1>Cursos</h1>

        <S.ButtonsWrapper>
          <Button
            variant="outlined"
            style={{ width: 'fit-content' }}
            onClick={() => setCreateCourseModalVisible(true)}
          >
            Criar novo curso
          </Button>

          <Button
            variant="outlined"
            style={{ width: 'fit-content' }}
            onClick={() => setCreateTaskModalVisible(true)}
          >
            Criar nova tarefa
          </Button>
        </S.ButtonsWrapper>

        <S.CourseList>
          {courses?.map((c) => (
            <CourseItem key={c.id} course={c} getCourses={getCourses} />
          ))}
        </S.CourseList>
      </Content>

      <CreateCourseModal
        visible={createCourseModalVisible}
        setVisible={setCreateCourseModalVisible}
        getCourses={getCourses}
      />

      {courses && (
        <CreateTaskModal
          visible={createTaskModalVisible}
          setVisible={setCreateTaskModalVisible}
          courses={courses}
        />
      )}
    </>
  )
}

export default Index
