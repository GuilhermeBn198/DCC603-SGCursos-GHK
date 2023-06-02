import React from 'react'

import { useForm } from 'react-hook-form'
import { Button, Input, Modal } from '@nextui-org/react'

import AppModal from 'components/AppModal'
import { signIn, useSession } from 'next-auth/react'

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
        `http://localhost:5050/api/users/${session.user.id}/edit`,
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
        <Modal.Body>
          <Input
            type="text"
            size="lg"
            placeholder={session?.user.username}
            disabled
          />
          <Input
            type="text"
            size="lg"
            placeholder="Nome"
            initialValue={session?.user.full_name}
            {...register('full_name', { required: true })}
          />
          <Input
            type="email"
            size="lg"
            placeholder="E-mail"
            initialValue={session?.user.mail}
            {...register('mail', { required: true })}
          />
          <Input
            type="tel"
            size="lg"
            placeholder="Celular"
            initialValue={session?.user.phone}
            {...register('phone', { required: true })}
          />
          <Input
            type="text"
            size="lg"
            placeholder="CEP"
            initialValue={session?.user.postal_code}
            {...register('postal_code', { required: true })}
          />
          <Input
            type="text"
            size="lg"
            placeholder="Instituição"
            initialValue={session?.user.institution}
            {...register('institution', { required: true })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Editar</Button>
        </Modal.Footer>
      </form>
    </AppModal>
  )
}

export default EditUserModal
