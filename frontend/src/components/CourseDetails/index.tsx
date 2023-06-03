'use client'
import { useGlobal } from 'contexts/global'
import * as S from './styles'
import { Button } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import Task from 'components/Task'
import { CourseDetailsTask } from 'hooks/useClasses'

export interface TypeTask {
  id: number
  type: 'globe' | 'file' | 'beaker'
  title: string
  description: string
  external_link: string
  done: boolean
}

const CourseDetails = () => {
  const { data } = useSession()
  const { activeClass, setActiveClass } = useGlobal()

  const [localClass, setLocalClass] = useState(activeClass)
  const [tasks, setTasks] = useState<CourseDetailsTask[] | undefined>()

  async function enroll() {
    await fetch('http://localhost:5050/api/enrollments/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data?.user.jwt}`
      },
      body: JSON.stringify({
        classId: activeClass?.id,
        userId: data?.user.id
      })
    }).then((r) => r.json())
    setLocalClass((l) => {
      if (l) return { ...l, enrolled: true }
    })
  }

  async function getTasks() {
    const response = await fetch(
      'http://localhost:5050/api/courses/completedTasks',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data?.user.jwt}`
        },
        body: JSON.stringify({
          courseId: activeClass?.course.id,
          userId: data?.user.id
        })
      }
    ).then((r) => r.json())
    setTasks(response.data)
  }

  useEffect(() => {
    getTasks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container>
      <S.GoBack onClick={() => setActiveClass(undefined)}>Voltar</S.GoBack>
      {localClass?.course?.photo ? (
        <S.ImageWrapper>
          <S.CoursePhoto
            src={`/${localClass.course.photo}`}
            alt="Course photo"
            fill
          />
        </S.ImageWrapper>
      ) : null}

      <S.Title>{localClass?.course.name}</S.Title>
      <S.Text>{localClass?.course.description}</S.Text>

      {!localClass?.enrolled ? (
        <Button type="button" onPress={enroll}>
          Inscrever-se
        </Button>
      ) : (
        <>
          <S.Row>
            <S.H3>Conteúdo do curso</S.H3>
            <S.Counter>
              {localClass.course.tasks.length} • {localClass?.course.workload}{' '}
              horas
            </S.Counter>
          </S.Row>
          <S.TasksList>
            {tasks?.map((task) => (
              <Task key={task.id} {...task} getTasks={getTasks} />
            ))}
          </S.TasksList>
        </>
      )}
    </S.Container>
  )
}

export default CourseDetails
