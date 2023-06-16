import { ChangeEvent } from 'react'

import { Controller, useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material'

import { User } from 'hooks/useUsers'

import * as S from './styles'

type Inputs = {
  roleId: string
}

const User = ({
  photo,
  username,
  full_name,
  role,
  id,
  mail,
  suspended
}: User) => {
  const { data } = useSession()
  const { register, control } = useForm<Inputs>({
    defaultValues: { roleId: String(role.id) }
  })

  async function onChangeRole(e: ChangeEvent<HTMLInputElement>) {
    await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${id}/edit`, {
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

  async function onChangeSuspenseStatus(e: ChangeEvent<HTMLInputElement>) {
    await fetch(`${process.env.NEXT_PUBLIC_API}/api/users/${id}/suspense`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data?.user.jwt}`
      },
      body: JSON.stringify({
        suspended: e.target.checked
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
        <Controller
          name="roleId"
          control={control}
          render={({ field }) => (
            <RadioGroup row defaultValue={field.value}>
              <FormControlLabel
                value="2"
                {...register('roleId')}
                control={<Radio onChange={onChangeRole} />}
                label="Administrador"
              />
              <FormControlLabel
                value="3"
                {...register('roleId')}
                control={<Radio onChange={onChangeRole} />}
                label="Estudante"
              />
            </RadioGroup>
          )}
        />
      )}
      {/* {role.id !== 1 && data?.user.role.id === 1 && (
        <RadioGroup row>
          <FormControlLabel
            value="2"
            {...register('roleId')}
            control={<Radio onChange={onChangeRole} />}
            label="Administrador"
          />
          <FormControlLabel
            value="3"
            {...register('roleId')}
            control={<Radio onChange={onChangeRole} />}
            label="Estudante"
          />
        </RadioGroup>
      )} */}
      {role.id !== 1 && (
        <label>
          Conta suspensa
          <Checkbox
            defaultChecked={suspended}
            onChange={onChangeSuspenseStatus}
          />
        </label>
      )}
    </S.Container>
  )
}

export default User
