'use client'
import { useGlobal } from 'contexts/global'
import * as S from './styles'
import Task from 'components/Task'
import fetcher from 'utils/fetcher'
import { useEffect, useState } from 'react'

export interface Response {
  data: Class
  error: any
}

export interface Class {
  course_name: string
  course_description: string
  workload: number
  start_date: string
  end_date: string
  total_enrollments: number
  photo: string
  couse_category: string
  tasks: TypeTask[]
}

export interface TypeTask {
  id: number
  type: 'globe' | 'file' | 'beaker'
  title: string
  description: string
  external_link: string
  done: boolean
}

const CourseDetails = () => {
  const { setActiveCourse } = useGlobal()

  const [classDetails, setClassDetails] = useState<Class>()

  async function getCourseDetails() {
    const response: Response = await fetcher('http://localhost:5050/classes/1')
    setClassDetails(response.data)
  }

  useEffect(() => {
    getCourseDetails()
  }, [])

  return (
    <S.Container>
      <S.GoBack onClick={() => setActiveCourse(undefined)}>Voltar</S.GoBack>
      <S.ImageWrapper>
        <S.CoursePhoto
          src={classDetails?.photo || ''}
          alt="Course photo"
          fill
        />
      </S.ImageWrapper>

      <S.Title>{classDetails?.course_name}</S.Title>
      <S.Text>{classDetails?.course_description}</S.Text>

      <S.Row>
        <S.H3>Conteúdo do curso</S.H3>
        <S.Counter>
          {classDetails?.tasks.length} • {classDetails?.workload} horas
        </S.Counter>
      </S.Row>

      <S.TasksList>
        {classDetails?.tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </S.TasksList>
    </S.Container>
  )
}

export default CourseDetails
