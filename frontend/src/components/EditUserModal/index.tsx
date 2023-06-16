import React from 'react'

import { useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { signIn, useSession } from 'next-auth/react'

import AppModal from 'components/AppModal'

type EditUserModalProps = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

type Inputs = {
  full_name: string
  phone: string
  institution: string
  postal_code: string
  mail: string
}

const EditUserModal = ({ visible, setVisible }: EditUserModalProps) => {
  const { data: session } = useSession()

  const { handleSubmit, register } = useForm<Inputs>()

  async function onSubmit(data: Inputs) {
    if (session?.user.jwt) {
      const response = await fetch(
        `http://${process.env.NEXT_PUBLIC_API}/api/users/${session.user.id}/edit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          },
          body: JSON.stringify({ user: data })
        }
      ).then((r) => r.json())
      await signIn('credentials', {
        username: response.data.username,
        password: response.data.password
      })
    }
    setVisible(false)
  }

  return (
    <AppModal title="Editar Perfil" visible={visible} setVisible={setVisible}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField type="text" placeholder={session?.user.username} disabled />
        <TextField
          type="text"
          placeholder="Nome"
          {...register('full_name', { required: true })}
        />
        <TextField
          type="email"
          placeholder="E-mail"
          {...register('mail', { required: true })}
        />
        <TextField
          type="tel"
          placeholder="Celular"
          {...register('phone', { required: true })}
        />
        <TextField
          type="text"
          placeholder="CEP"
          {...register('postal_code', { required: true })}
        />
        <TextField
          type="text"
          placeholder="Instituição"
          {...register('institution', { required: true })}
        />
        <Button variant="contained" type="submit">
          Editar
        </Button>
      </form>
    </AppModal>
  )
}

export default EditUserModal
