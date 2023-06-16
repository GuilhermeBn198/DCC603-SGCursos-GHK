'use client'
import React from 'react'

import { useForm } from 'react-hook-form'
import { Category } from 'hooks/useClasses'
import { useSession } from 'next-auth/react'
import { Button, TextField } from '@mui/material'

import AppModal from 'components/AppModal'

import * as S from './styles'

type EditCategoryModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  getCategories: () => void
} & Category

type Inputs = {
  name: string
}

const EditCategoryModal = ({
  visible,
  setVisible,
  id,
  name,
  getCategories
}: EditCategoryModalProps) => {
  const { handleSubmit, register } = useForm<Inputs>({
    defaultValues: { name }
  })
  const { data: session } = useSession()

  async function onSubmit({ name }: Inputs) {
    if (session?.user.jwt) {
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API}/api/courses/categories/edit/${id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          },
          body: JSON.stringify({
            name
          })
        }
      )
    }
    getCategories()
    setVisible(false)
  }

  return (
    <AppModal
      title={`Editar Categoria: ${name}`}
      visible={visible}
      setVisible={setVisible}
    >
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Nome da categoria"
          defaultValue={name}
          {...register('name', { required: true })}
        />

        <span className="buttonsWrapper">
          <Button>Cancelar</Button>
          <Button variant="contained" type="submit">
            Editar
          </Button>
        </span>
      </S.Form>
    </AppModal>
  )
}

export default EditCategoryModal
