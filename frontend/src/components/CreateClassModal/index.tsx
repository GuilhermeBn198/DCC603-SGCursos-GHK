'use client'
import React, { useEffect, useState } from 'react'

import { mutate } from 'swr'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { Button, Modal } from '@nextui-org/react'

import AppModal from 'components/AppModal'

import { Course } from 'hooks/useClasses'

import * as S from './styles'

type CreateClassModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

type Inputs = {
  courseId: string
  start_date: string
  end_date: string
}

const CreateClassModal = ({ visible, setVisible }: CreateClassModalProps) => {
  const { handleSubmit, register } = useForm<Inputs>()
  const { data: session } = useSession()

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
        <Modal.Body>
          <label htmlFor="courseId">Escolha um curso</label>
          <select {...register('courseId', { required: true })}>
            {courses?.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <label htmlFor="start_date">Data de início</label>
          <input type="date" {...register('start_date', { required: true })} />

          <label htmlFor="end_date">Data de término</label>
          <input type="date" {...register('end_date', { required: true })} />
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Cancelar
          </Button>
          <Button auto type="submit">
            Criar
          </Button>
        </Modal.Footer>
      </S.Form>
    </AppModal>
  )
}

export default CreateClassModal
