import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

import { User } from 'hooks/useUsers'

import * as S from './styles'
import { useSession } from 'next-auth/react'

type Inputs = {
  roleId: string
}

const User = ({ photo, username, full_name, role, id, mail }: User) => {
  const { data } = useSession()
  const { register } = useForm<Inputs>({
    defaultValues: { roleId: String(role.id) }
  })

  async function onChangeRole(e: ChangeEvent<HTMLInputElement>) {
    await fetch(`http://localhost:5050/api/users/${id}/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data?.user.jwt}`
      },
      body: JSON.stringify({
        roleId: e.target.value
      })
    }).then((r) => r.json())
  }

  return (
    <S.Container>
      <S.Row>
        <S.ProfileImage height={50} width={50} src={photo} alt={username} />
        <S.Column>
          <S.Strong>{full_name}</S.Strong>
          <S.Text>{mail}</S.Text>
        </S.Column>
      </S.Row>

      {role.id !== 1 && data?.user.role.id === 1 && (
        <>
          <label>
            Administrador
            <input
              type="radio"
              value="2"
              {...register('roleId')}
              onChange={onChangeRole}
            />
          </label>

          <label>
            Estudante
            <input
              type="radio"
              value="3"
              {...register('roleId')}
              onChange={onChangeRole}
            />
          </label>
        </>
      )}
    </S.Container>
  )
}

export default User
