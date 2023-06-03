'use client'
import React, { useEffect, useState } from 'react'

import { Button } from '@nextui-org/react'
import { useSession } from 'next-auth/react'

import { Content } from 'components/Content'
import CourseItem from 'components/CourseItem'

import { Course } from 'hooks/useClasses'

import * as S from './styles'
import CreateCourseModal from 'components/CreateCourseModal'

export interface CoursesResponse {
  data: Course[]
  errors: any[]
}

const Index = () => {
  const { data: session } = useSession()

  const [courses, setCourses] = useState<Course[]>()
  const [createCourseModalVisible, setCreateCourseModalVisible] =
    useState(false)

  async function getCourses() {
    if (session?.user.jwt) {
      const response: CoursesResponse = await fetch(
        'http://localhost:5050/api/courses',
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

        <Button
          type="submit"
          size="sm"
          style={{ width: 'fit-content' }}
          onPress={() => setCreateCourseModalVisible(true)}
        >
          Criar novo curso
        </Button>

        <S.CourseList>
          {courses?.map((c) => (
            <CourseItem key={c.id} {...c} getCourses={getCourses} />
          ))}
        </S.CourseList>
      </Content>

      <CreateCourseModal
        visible={createCourseModalVisible}
        setVisible={setCreateCourseModalVisible}
        getCourses={getCourses}
      />
    </>
  )
}

export default Index
