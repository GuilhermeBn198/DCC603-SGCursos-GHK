'use client'
import React from 'react'

import { useSession } from 'next-auth/react'

// import AppModal from 'components/AppModal'

import * as S from './styles'
// import { Button, Input, Modal } from '@nextui-org/react'
// import { useForm } from 'react-hook-form'

// type Inputs = {
//   password: string
//   full_name: string
//   mail: string
//   phone: string
//   photo: string
//   institution: string
// }

const ProfileButton = () => {
  // const { handleSubmit, register } = useForm<Inputs>()

  // const [visible, setVisible] = useState(false)
  const { data } = useSession()

  if (data === null) return null

  // function closeHandler() {
  //   setVisible(false)
  // }

  // async function onSubmit(data: Inputs) {
  //   await fetch(`http://localhost:5050/user/1/edit`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then((r) => r.json())
  //   closeHandler()
  // }

  return (
    <>
      <S.Container>
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
          {/* <S.Text>
            {roles[data?.user?.role as 'student']} • Boa Vista, RR
          </S.Text> */}
        </S.Column>
      </S.Container>

      {/* <AppModal title="Editar Perfil" visible={visible} setVisible={setVisible}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Input
              {...register('full_name', { required: true })}
              type="text"
              size="lg"
              placeholder="Nome"
            />
            <Input
              {...register('photo', { required: true })}
              type="text"
              size="lg"
              placeholder="Foto"
            />
            <Input
              {...register('mail', { required: true })}
              type="email"
              size="lg"
              placeholder="E-mail"
            />
            <Input
              {...register('phone', { required: true })}
              type="tel"
              size="lg"
              placeholder="Celular"
            />
            <Input
              {...register('institution', { required: true })}
              type="text"
              size="lg"
              placeholder="Instituição"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Editar</Button>
          </Modal.Footer>
        </form>
      </AppModal> */}
    </>
  )
}

export default ProfileButton
