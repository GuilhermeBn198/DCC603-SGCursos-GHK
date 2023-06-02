'use client'
import React, { useState } from 'react'

import { useSession } from 'next-auth/react'

import * as S from './styles'
import EditUserModal from 'components/EditUserModal'

const ProfileButton = () => {
  const [visible, setVisible] = useState(false)
  const { data } = useSession()
  if (data === null) return null

  return (
    <>
      <S.Container onClick={() => setVisible(true)}>
        {data?.user.photo ? (
          <S.Profile
            alt="Profile icon"
            src={data?.user.photo}
            width={60}
            height={60}
          />
        ) : null}
        <S.Column>
          <S.Title>{data?.user?.full_name}</S.Title>
          <S.Text>{data?.user?.role.name} • Boa Vista, RR</S.Text>
        </S.Column>
      </S.Container>

      <EditUserModal visible={visible} setVisible={setVisible} />
    </>
  )
}

export default ProfileButton
