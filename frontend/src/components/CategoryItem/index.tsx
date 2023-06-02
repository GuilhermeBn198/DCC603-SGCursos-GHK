import React, { useState } from 'react'

import { Category } from 'hooks/useClasses'

import * as S from './styles'
import { Pencil, Trash } from '@styled-icons/octicons'
import { useSession } from 'next-auth/react'

import EditCategoryModal from 'components/EditCategoryModal'

type CategoryItemsProps = { getCategories: () => void } & Category

const CategoryItems = ({ id, name, getCategories }: CategoryItemsProps) => {
  const { data: session } = useSession()

  const [edit, setEdit] = useState(false)

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

  return (
    <S.Category key={id}>
      {name}

      <S.IconsWrapper>
        <Pencil size={24} onClick={() => setEdit(true)} />
        <Trash
          size={24}
          onClick={() => deleteCategory(id)}
          style={{ fill: '#f44336' }}
        />
      </S.IconsWrapper>

      <EditCategoryModal
        visible={edit}
        setVisible={setEdit}
        getCategories={getCategories}
        id={id}
        name={name}
      />
    </S.Category>
  )
}

export default CategoryItems
