'use client'
import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material'

import { Category, Course } from 'hooks/useClasses'

import AppModal from 'components/AppModal'

import * as S from './styles'

type EditCourseModalProps = {
  course: Course
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  getCourses(): Promise<void>
}

type CategoryResponse = {
  data: Category[]
  errors: string
}

type Inputs = {
  name: string
  description: string
  photo: string
  workload: string
  categoryId: string
}

const EditCourseModal = ({
  visible,
  course,
  setVisible,
  getCourses
}: EditCourseModalProps) => {
  const { handleSubmit, register } = useForm<Inputs>({
    defaultValues: {
      categoryId: String(course.categoryId),
      name: course.name,
      description: course.description,
      photo: course.photo,
      workload: String(course.workload)
    }
  })
  const { data: session } = useSession()

  const [categories, setCategories] = useState<Category[]>()

  async function onSubmit({
    name,
    description,
    photo,
    workload,
    categoryId
  }: Inputs) {
    if (session?.user.jwt) {
      await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/courses/${course.id}/edit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          },
          body: JSON.stringify({
            course: {
              name,
              description,
              photo,
              workload: Number(workload)
            },
            categoryId
          })
        }
      )
    }
    getCourses()
    setVisible(false)
  }

  async function getCategories() {
    if (session?.user.jwt) {
      const response: CategoryResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API}/api/courses/categories`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          }
        }
      ).then((r) => r.json())
      setCategories(response.data as Category[])
    }
  }

  useEffect(() => {
    getCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user.jwt])

  return (
    <AppModal
      title={`Editar curso: ${course.name}`}
      visible={visible}
      setVisible={setVisible}
    >
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputLabel id="categoryId">Categoria</InputLabel>
          <Select
            {...register('categoryId', { required: true })}
            labelId="categoryId"
            label="Categoria"
            defaultValue={course.categoryId}
          >
            {categories?.map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField label="Nome" {...register('name', { required: true })} />
        <TextField
          label="Descrição"
          {...register('description', { required: true })}
        />
        <TextField label="Foto" {...register('photo', { required: true })} />
        <TextField
          type="number"
          label="Carga horária"
          {...register('workload', { required: true })}
        />

        <Button onClick={() => setVisible(false)}>Cancelar</Button>
        <Button variant="contained" type="submit">
          Editar
        </Button>
      </S.Form>
    </AppModal>
  )
}

export default EditCourseModal
