import React, { useState } from 'react'

import dayjs from 'dayjs'
import { mutate } from 'swr'
import { useSession } from 'next-auth/react'
import { Avatar, CircularProgress, Tooltip } from '@mui/material'
import { MortarBoard, Pencil, Trash } from '@styled-icons/octicons'

import { SGCLass } from 'hooks/useClasses'

import EditClassModal from 'components/EditClassModal'
import { IconsWrapper } from 'components/CategoryItem/styles'

import * as S from './styles'

const ClassItem = (sgclass: SGCLass) => {
  const { data: session } = useSession()

  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const { course, end_date, id, start_date, totalEnrollments } = sgclass

  async function deleteClass(id: number) {
    if (session?.user.jwt) {
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API}/api/classes/delete/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          }
        }
      )
    }
    mutate('http://${process.env.NEXT_PUBLIC_API}/api/classes')
  }

  async function generateCertificates() {
    if (session?.user.jwt) {
      setLoading(true)
      await fetch(
        `http://${process.env.NEXT_PUBLIC_API}/api/classes/${session.user.id}/generate-certificates`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          },
          body: JSON.stringify({
            courseId: sgclass.course.id,
            classId: sgclass.id
          })
        }
      )
      setLoading(false)
    }
  }

  return (
    <>
      <S.Class>
        <IconsWrapper>
          <Avatar
            alt={course.name}
            src={course.photo}
            sx={{ width: 64, height: 64 }}
          />
          {`${course.name} • ${dayjs(start_date).format('DD/MM')} até ${dayjs(
            end_date
          ).format('DD/MM')} • ${totalEnrollments} inscrito(s)`}
        </IconsWrapper>
        <IconsWrapper>
          {loading ? (
            <CircularProgress />
          ) : (
            <Tooltip title="Gerar certificados">
              <MortarBoard size={24} onClick={generateCertificates} />
            </Tooltip>
          )}
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
