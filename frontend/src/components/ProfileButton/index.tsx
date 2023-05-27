'use client'
import React from 'react'

import * as S from './styles'
import { useSession } from 'next-auth/react'

const ProfileButton = () => {
  const { data } = useSession()

  if (data === null) return null

  const roles = {
    student: 'Estudante',
    admin: 'Administrador'
  }

  return (
    <S.Container href="/profile">
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
        <S.Text>{roles[data?.user?.role as 'student']} • Boa Vista, RR</S.Text>
      </S.Column>
    </S.Container>
  )
}

export default ProfileButton
