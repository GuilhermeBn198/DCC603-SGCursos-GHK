import React from 'react'

import { useForm } from 'react-hook-form'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'

import { Course } from 'hooks/useClasses'

import AppModal from 'components/AppModal'

import * as S from './styles'
import { useSession } from 'next-auth/react'

type CreateTaskModalProps = {
  courses: Course[]
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

type Inputs = {
  courseId: number
  title: string
  description: string
  external_link: string
}

const CreateTaskModal = ({
  visible,
  setVisible,
  courses
}: CreateTaskModalProps) => {
  const { data: session } = useSession()
  const { handleSubmit, register, reset } = useForm<Inputs>()

  async function onSubmit({
    title,
    description,
    external_link,
    courseId
  }: Inputs) {
    if (session?.user.jwt) {
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API}/api/courses/${courseId}/task/new`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          },
          body: JSON.stringify({
            title,
            description,
            external_link
          })
        }
      ).then((r) => r.json())
      setVisible(false)
      reset()
    }
  }

  return (
    <AppModal
      title="Criar nova tarefa"
      visible={visible}
      setVisible={setVisible}
    >
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputLabel id="CourseLabel">Curso</InputLabel>
          <Select
            defaultValue=""
            {...register('courseId', { required: true })}
            labelId="CourseLabel"
            label="Curso"
          >
            {courses?.map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Título da tarefa"
          {...register('title', { required: true })}
        />
        <TextField
          label="Descrição da tarefa"
          {...register('description', { required: true })}
        />
        <TextField
          type="url"
          label="Link para conteúdo da tarefa"
          {...register('external_link', { required: true })}
        />
        <Button variant="contained" type="submit">
          Criar Tarefa
        </Button>
      </S.Form>
    </AppModal>
  )
}

export default CreateTaskModal
