import React, { useState } from 'react'

import { mutate } from 'swr'
import { useSession } from 'next-auth/react'
import { Pencil, Trash } from '@styled-icons/octicons'

import { SGCLass } from 'hooks/useClasses'

import EditClassModal from 'components/EditClassModal'
import { IconsWrapper } from 'components/CategoryItem/styles'

import * as S from './styles'

const ClassItem = (sgclass: SGCLass) => {
  const { data: session } = useSession()
  const [visible, setVisible] = useState(false)

  const { course, end_date, id, start_date } = sgclass

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
    <>
      <S.Class>
        {`${course.name} • ${new Date(
          start_date
        ).toLocaleString()} até ${new Date(end_date).toLocaleDateString()}`}
        <IconsWrapper>
          <Pencil size={24} onClick={() => setVisible(true)} />
          <Trash
            size={24}
            onClick={() => deleteClass(id)}
            style={{ fill: '#f44336' }}
          />
        </IconsWrapper>
      </S.Class>

      <EditClassModal visible={visible} setVisible={setVisible} {...sgclass} />
    </>
  )
}

export default ClassItem
