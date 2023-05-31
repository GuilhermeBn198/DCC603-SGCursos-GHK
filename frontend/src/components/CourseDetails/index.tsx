'use client'
import { useGlobal } from 'contexts/global'
import * as S from './styles'
import { Button } from '@nextui-org/react'
// import Task from 'components/Task'
// import fetcher from 'utils/fetcher'
// import { useEffect, useState } from 'react'

export interface TypeTask {
  id: number
  type: 'globe' | 'file' | 'beaker'
  title: string
  description: string
  external_link: string
  done: boolean
}

const CourseDetails = () => {
  const { activeClass, setActiveClass } = useGlobal()

  return (
    <S.Container>
      <S.GoBack onClick={() => setActiveClass(undefined)}>Voltar</S.GoBack>
      {activeClass?.course?.photo ? (
        <S.ImageWrapper>
          <S.CoursePhoto
            src={`/${activeClass.course.photo}`}
            alt="Course photo"
            fill
          />
        </S.ImageWrapper>
      ) : null}

      <S.Title>{activeClass?.course.name}</S.Title>
      <S.Text>{activeClass?.course.description}</S.Text>

      {!activeClass?.enrolled ? (
        <Button>Inscrever-se</Button>
      ) : (
        <S.Row>
          <S.H3>Conteúdo do curso</S.H3>
          <S.Counter>2 • {activeClass?.course.workload} horas</S.Counter>
        </S.Row>
      )}

      {/* <S.TasksList>
        {classDetails?.tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </S.TasksList> */}
    </S.Container>
  )
}

export default CourseDetails
