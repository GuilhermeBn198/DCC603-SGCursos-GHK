import { ChangeEvent, useState } from 'react'

import Link from 'next/link'
import { Checkbox } from '@mui/material'
import { useSession } from 'next-auth/react'
import { Beaker, File, Globe } from '@styled-icons/octicons'

import { CourseDetailsTask } from 'hooks/useClasses'

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

  const [checked, setChecked] = useState(completed)

  async function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const completed = e.target.checked
    await fetch(
      `${process.env.NEXT_PUBLIC_API}/api/courses/completedTasks/edit`,
      {
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
      }
    ).then((r) => r.json())
    setChecked((c) => !c)
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
      <Checkbox checked={!!checked} onChange={onInputChange} />
    </S.Container>
  )
}

export default Task
