'use client'
import React from 'react'

import User from 'components/User'
import { Content } from 'components/Content'

import useUsers from 'hooks/useUsers'

import * as S from './styles'

const Users = () => {
  const { users } = useUsers()

  return (
    <Content>
      <h1>Usuários</h1>

      <S.List>
        {users?.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </S.List>
    </Content>
  )
}

export default Users
