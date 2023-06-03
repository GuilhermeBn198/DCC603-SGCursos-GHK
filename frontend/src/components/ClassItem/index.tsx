import React, { useState } from 'react'

import { mutate } from 'swr'
import { useSession } from 'next-auth/react'
import { MortarBoard, Pencil, Trash } from '@styled-icons/octicons'

import { SGCLass } from 'hooks/useClasses'

import EditClassModal from 'components/EditClassModal'
import { IconsWrapper } from 'components/CategoryItem/styles'

import * as S from './styles'
import { Avatar, Tooltip } from '@nextui-org/react'
import dayjs from 'dayjs'

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
        <IconsWrapper>
          <Avatar src={course.photo} size="xl" />
          {`${course.name} • ${dayjs(start_date).format('DD/MM')} até ${dayjs(
            end_date
          ).format('DD/MM')} • 4 inscrito(s)`}
        </IconsWrapper>
        <IconsWrapper>
          <Tooltip content="Gerar certificados" color="primary">
            <MortarBoard size={24} />
          </Tooltip>
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
