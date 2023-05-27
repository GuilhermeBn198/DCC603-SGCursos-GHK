import { Checkbox } from '@nextui-org/react'

import { User } from 'hooks/useUsers'

import * as S from './styles'

export const roles = {
  student: 'Estudante',
  admin: 'Administrador'
}

const User = ({ photo, username, full_name, role }: User) => {
  return (
    <S.Container>
      <S.Row>
        <S.ProfileImage height={50} width={50} src={photo} alt={username} />
        <S.Column>
          <S.Strong>{full_name}</S.Strong>
          <S.Text>{roles[role as 'student']}</S.Text>
        </S.Column>
      </S.Row>

      <Checkbox>Suspender</Checkbox>
    </S.Container>
  )
}

export default User
