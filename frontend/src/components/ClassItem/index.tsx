import React from 'react'

import { mutate } from 'swr'
import { useSession } from 'next-auth/react'
import { Trash } from '@styled-icons/octicons'

import { SGCLass } from 'hooks/useClasses'

import { IconsWrapper } from 'components/CategoryItem/styles'

import * as S from './styles'
import dayjs from 'dayjs'

const ClassItem = ({ course, id, start_date, end_date }: SGCLass) => {
  const { data: session } = useSession()

  async function deleteClass(id: number) {
    if (session?.user.jwt) {
      await fetch(`http://localhost:5050/api/classes/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user.jwt}`
        }
      })
    }
    mutate('http://localhost:5050/api/classes')
  }

  return (
    <S.Class>
      {`${course.name} • ${dayjs(start_date).format('DD/MM')} até ${dayjs(
        end_date
      ).format('DD/MM')}`}
      <IconsWrapper>
        <Trash
          size={24}
          onClick={() => deleteClass(id)}
          style={{ fill: '#f44336' }}
        />
      </IconsWrapper>
    </S.Class>
  )
}

export default ClassItem
