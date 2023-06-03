'use client'
import React from 'react'

import { mutate } from 'swr'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { Button, Modal } from '@nextui-org/react'

import AppModal from 'components/AppModal'

import { SGCLass } from 'hooks/useClasses'

import * as S from './styles'
import dayjs from 'dayjs'

type EditClassModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
} & SGCLass

type Inputs = {
  start_date: string
  end_date: string
}

const EditClassModal = ({
  visible,
  setVisible,
  start_date,
  id,
  end_date
}: EditClassModalProps) => {
  const { handleSubmit, register } = useForm<Inputs>({
    defaultValues: {
      start_date,
      end_date
    }
  })
  const { data: session } = useSession()

  async function onSubmit({ end_date, start_date }: Inputs) {
    console.log(start_date, end_date, new Date(start_date))
    if (session?.user.jwt) {
      fetch(`http://localhost:5050/api/classes/${id}/edit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.jwt}`
        },
        body: JSON.stringify({
          start_date: new Date(start_date),
          end_date: new Date(end_date)
        })
      })
    }
    setVisible(false)
    mutate('http://localhost:5050/api/classes')
  }

  return (
    <AppModal title="Editar turma" visible={visible} setVisible={setVisible}>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <label htmlFor="start_date">Data de início</label>
          <input
            type="date"
            {...register('start_date', { required: true })}
            defaultValue={dayjs(start_date).format('YYYY-MM-DD')}
          />

          <label htmlFor="end_date">Data de término</label>
          <input
            type="date"
            {...register('end_date', { required: true })}
            defaultValue={dayjs(end_date).format('YYYY-MM-DD')}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Cancelar
          </Button>
          <Button auto type="submit">
            Editar
          </Button>
        </Modal.Footer>
      </S.Form>
    </AppModal>
  )
}

export default EditClassModal
