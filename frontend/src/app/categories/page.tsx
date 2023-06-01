'use client'
import React, { useEffect, useState } from 'react'

import { Button, Input } from '@nextui-org/react'

import { Content } from 'components/Content'

import * as S from './styles'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { Trash } from '@styled-icons/octicons'

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
        `http://localhost:5050/api/courses/categories`,
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
      await fetch(`http://localhost:5050/api/courses/categories/new`, {
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
    reset()
    getCategories()
  }

  async function deleteCategory(categoryId: number) {
    if (session?.user.jwt) {
      await fetch(
        `http://localhost:5050/api/courses/categories/delete/${categoryId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          }
        }
      )
    }
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
        <Input
          aria-label="Nome da nova categoria"
          placeholder="Nome da nova categoria"
          {...register('name', { required: true })}
        />
        <Button type="submit" size="sm" style={{ width: 'fit-content' }}>
          Criar categoria
        </Button>
      </S.CreateCategoryWrapper>

      <S.CategoryList>
        {categories?.map((c) => (
          <S.Category key={c.id}>
            {c.name}
            <Trash size={24} onClick={() => deleteCategory(c.id)} />
          </S.Category>
        ))}
      </S.CategoryList>
    </Content>
  )
}

export default Categories
