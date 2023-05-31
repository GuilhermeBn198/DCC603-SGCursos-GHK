import { ChangeEvent } from 'react'

import Link from 'next/link'
import { Beaker, File, Globe } from '@styled-icons/octicons'

import { CourseDetailsTask } from 'hooks/useClasses'

import { useSession } from 'next-auth/react'

import * as S from './styles'

type TaskProps = { getTasks(): Promise<void> } & CourseDetailsTask

const Task = ({
  title,
  external_link,
  completed,
  id,
  completedTaskId,
  getTasks
}: TaskProps) => {
  const { data } = useSession()

  async function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const completed = e.target.checked
    await fetch('http://localhost:5050/api/courses/completedTasks/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data?.user.jwt}`
      },
      body: JSON.stringify({
        courseTaskId: id,
        completedTaskId,
        completed,
        userId: data?.user.id
      })
    }).then((r) => r.json())
    await getTasks()
  }

  const icons = {
    globe: <Globe />,
    file: <File />,
    beaker: <Beaker />
  }

  return (
    <S.Container>
      <S.Row>
        <S.IconWrapper type={'globe'}>{icons['globe']}</S.IconWrapper>
        <Link href={external_link} target="_blank">
          <S.Text>{title}</S.Text>
        </Link>
      </S.Row>
      <input
        type="checkbox"
        defaultChecked={completed}
        onChange={onInputChange}
      />
    </S.Container>
  )
}

export default Task
