'use client'
import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { Button, Input, Modal, Textarea } from '@nextui-org/react'

import { Category } from 'hooks/useClasses'

import AppModal from 'components/AppModal'

import * as S from './styles'

type CreateCourseModalProps = {
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

const CreateCourseModal = ({
  visible,
  setVisible,
  getCourses
}: CreateCourseModalProps) => {
  const { handleSubmit, register } = useForm<Inputs>()
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
      await fetch('http://localhost:5050/api/courses/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.jwt}`
        },
        body: JSON.stringify({
          categoryId: Number(categoryId),
          course: { name, description, photo, workload: Number(workload) }
        })
      })
    }
    getCourses()
    setVisible(false)
  }

  async function getCategories() {
    if (session?.user.jwt) {
      const response: CategoryResponse = await fetch(
        'http://localhost:5050/api/courses/categories',
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
      title="Criar novo curso"
      visible={visible}
      setVisible={setVisible}
    >
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <label htmlFor="categoryId">Categoria</label>
          <select {...register('categoryId', { required: true })}>
            {categories?.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <Input label="Nome" {...register('name', { required: true })} />
          <Textarea
            label="Descrição"
            {...register('description', { required: true })}
          />
          <Input label="Foto" {...register('photo', { required: true })} />
          <Input
            type="number"
            label="Carga horária"
            {...register('workload', { required: true })}
          />
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

export default CreateCourseModal
