'use client'
import React from 'react'

import { mutate } from 'swr'
import { Button } from '@mui/material'
import { useSession } from 'next-auth/react'
import { DatePicker } from '@mui/x-date-pickers'
import { Controller, useForm } from 'react-hook-form'

import { SGCLass } from 'hooks/useClasses'

import AppModal from 'components/AppModal'

import * as S from './styles'

type EditClassModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
} & SGCLass

type Inputs = {
  start_date: Date
  end_date: Date
}

const EditClassModal = ({ visible, setVisible, id }: EditClassModalProps) => {
  const { handleSubmit, control, setValue } = useForm<Inputs>()
  const { data: session } = useSession()

  async function onSubmit({ end_date, start_date }: Inputs) {
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
        <label htmlFor="start_date">Data de início</label>
        <Controller
          name="start_date"
          control={control}
          rules={{ required: true }}
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
          rules={{ required: true }}
          render={() => (
            <DatePicker
              format="DD/MM/YYYY"
              onChange={(event) => setValue('end_date', event as Date)}
            />
          )}
        />

        <Button onClick={() => setVisible(false)}>Cancelar</Button>
        <Button variant="contained" type="submit">
          Editar
        </Button>
      </S.Form>
    </AppModal>
  )
}

export default EditClassModal
