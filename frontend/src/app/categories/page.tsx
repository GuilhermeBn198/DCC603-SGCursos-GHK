'use client'
import React, { useEffect, useState } from 'react'

import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { Button, TextField } from '@mui/material'

import { Content } from 'components/Content'
import CategoryItems from 'components/CategoryItem'

import * as S from './styles'

export interface ResponseCategory {
  data: Category[]
  errors: any[]
}

export interface Category {
  id: number
  name: string
}

type Inputs = {
  name: string
}

const Categories = () => {
  const { data: session } = useSession()
  const { register, handleSubmit, reset } = useForm<Inputs>()

  const [categories, setCategories] = useState<Category[] | undefined>()

  async function getCategories() {
    if (session?.user.jwt) {
      const response: ResponseCategory = await fetch(
        `http://${process.env.NEXT_PUBLIC_API}/api/courses/categories`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          }
        }
      ).then((r) => r.json())
      setCategories(response.data)
    }
  }

  async function createCategory({ name }: Inputs) {
    if (session?.user.jwt) {
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API}/api/courses/categories/new`,
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
    reset()
    getCategories()
  }

  useEffect(() => {
    getCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user.jwt])

  return (
    <Content>
      <h1>Categorias</h1>

      <S.CreateCategoryWrapper onSubmit={handleSubmit(createCategory)}>
        <TextField
          type="text"
          label="Nome da nova categoria"
          {...register('name', { required: true })}
        />
        <Button type="submit" variant="contained">
          Criar categoria
        </Button>
      </S.CreateCategoryWrapper>

      <S.CategoryList>
        {categories?.map((c) => (
          <CategoryItems key={c.id} {...c} getCategories={getCategories} />
        ))}
      </S.CategoryList>
    </Content>
  )
}

export default Categories
