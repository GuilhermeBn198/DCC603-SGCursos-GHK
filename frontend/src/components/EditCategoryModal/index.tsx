'use client'
import React from 'react'

import { Button, Input, Modal } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { Category } from 'hooks/useClasses'
import { useSession } from 'next-auth/react'

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
      await fetch(`http://localhost:5050/api/courses/categories/edit/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.jwt}`
        },
        body: JSON.stringify({
          name
        })
      })
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
        <Modal.Body>
          <Input
            placeholder="Nome da categoria"
            initialValue={name}
            {...register('name', { required: true })}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error">
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

export default EditCategoryModal
