'use client'
import React, { useEffect, useState } from 'react'

import { mutate } from 'swr'
import { useSession } from 'next-auth/react'
import { DatePicker } from '@mui/x-date-pickers'
import { Controller, useForm } from 'react-hook-form'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'

import { Course } from 'hooks/useClasses'

import AppModal from 'components/AppModal'

import * as S from './styles'

type CreateClassModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

type Inputs = {
  courseId: string
  start_date: Date
  end_date: Date
}

const CreateClassModal = ({ visible, setVisible }: CreateClassModalProps) => {
  const { data: session } = useSession()
  const { handleSubmit, register, control, setValue } = useForm<Inputs>()

  const [courses, setCourses] = useState<Course[] | undefined>()

  async function onSubmit({ courseId, end_date, start_date }: Inputs) {
    if (session?.user.jwt) {
      fetch('http://localhost:5050/api/classes/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.jwt}`
        },
        body: JSON.stringify({
          courseId,
          start_date: new Date(start_date).toISOString(),
          end_date: new Date(end_date).toISOString()
        })
      })
    }
    setVisible(false)
    mutate('http://localhost:5050/api/classes')
  }

  async function getCourses() {
    if (session?.user.jwt) {
      const response = await fetch('http://localhost:5050/api/courses', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.jwt}`
        }
      }).then((r) => r.json())
      setCourses(response.data as Course[])
    }
  }

  useEffect(() => {
    getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user.jwt])

  return (
    <AppModal
      title="Criar nova turma"
      visible={visible}
      setVisible={setVisible}
    >
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputLabel id="courseId">Escolha um curso</InputLabel>
          <Select
            {...register('courseId', { required: true })}
            labelId="courseId"
            label="Escolha um curso"
            defaultValue=""
          >
            {courses?.map((c) => (
              <MenuItem key={c.id} value={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <label htmlFor="start_date">Data de início</label>
        <Controller
          name="start_date"
          control={control}
          render={() => (
            <DatePicker
              format="DD/MM/YYYY"
              onChange={(event) => setValue('start_date', event as Date)}
            />
          )}
        />

        <label htmlFor="end_date">Data de término</label>
        <Controller
          name="end_date"
          control={control}
          render={() => (
            <DatePicker
              format="DD/MM/YYYY"
              onChange={(event) => setValue('end_date', event as Date)}
            />
          )}
        />

        <Button onClick={() => setVisible(false)}>Cancelar</Button>
        <Button variant="contained" type="submit">
          Criar
        </Button>
      </S.Form>
    </AppModal>
  )
}

export default CreateClassModal
