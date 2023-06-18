'use client'
import { useEffect, useState } from 'react'

import { Button } from '@mui/material'
import { useSession } from 'next-auth/react'

import { useGlobal } from 'contexts/global'

import useClasses, { CourseDetailsTask } from 'hooks/useClasses'

import Task from 'components/Task'

import * as S from './styles'

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
  const { mutate } = useClasses()
  const { activeClass, setActiveClass } = useGlobal()

  const [localClass, setLocalClass] = useState(activeClass)
  const [tasks, setTasks] = useState<CourseDetailsTask[] | undefined>()

  async function enroll() {
    await fetch(`${process.env.NEXT_PUBLIC_API}/api/enrollments/new`, {
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
      `${process.env.NEXT_PUBLIC_API}/api/courses/completedTasks`,
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
    updateActiveClass()
  }

  async function updateActiveClass() {
    await mutate().then((e) =>
      setLocalClass((a) => e?.data.find((c) => c.id === a?.id))
    )
  }

  useEffect(() => {
    getTasks()
    setLocalClass(activeClass)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeClass])

  return (
    <S.Container>
      <S.GoBack onClick={() => setActiveClass(undefined)}>Voltar</S.GoBack>
      {localClass?.course?.photo ? (
        <S.ImageWrapper>
          <S.CoursePhoto
            src={`/${localClass.course.photo}`}
            alt="Course photo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </S.ImageWrapper>
      ) : null}

      <S.Title>{localClass?.course.name}</S.Title>
      <S.Text>{localClass?.course.description}</S.Text>

      {!localClass?.enrolled ? (
        <Button variant="contained" type="button" onClick={enroll}>
          Inscrever-se
        </Button>
      ) : (
        <>
          <S.Row>
            <S.H3>Conteúdo do curso</S.H3>
            <S.Counter>
              {`${localClass.course.tasks.length} atividades`} •{' '}
              {localClass?.course.workload} horas
            </S.Counter>
          </S.Row>
          <S.TasksList>
            {tasks?.map((task) => (
              <Task key={task.id} {...task} getTasks={getTasks} />
            ))}
          </S.TasksList>
        </>
      )}

      {localClass?.enrolledUsers ? (
        <>
          <S.Row>
            <S.H3>Alunos matriculados</S.H3>
          </S.Row>
          {localClass.enrolledUsers.map((e) => (
            <S.User key={e.id}>
              <p>{`${e.full_name} (${e.institution}).`}</p>
              <p>{`Progresso: ${
                (e.CompletedTask.length / localClass.course.tasks.length) * 100
              }%`}</p>
            </S.User>
          ))}
        </>
      ) : null}
    </S.Container>
  )
}

export default CourseDetails
