'use client'
import React from 'react'

import { Input } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import Edit from 'templates/Edit'

import * as S from './styles'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'

type Inputs = {
  full_name: string
  photo: string
  email: string
  phone: string
  institution: string
}

const Page = () => {
  const { push } = useRouter()
  const { handleSubmit, register } = useForm<Inputs>()
  const { data: session } = useSession()

  async function onSubmit(data: Inputs) {
    await fetch(`http://localhost:5050/user/1/edit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((r) => r.json())
    push('/dashboard')
  }

  return (
    <Edit>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Editar perfil: {session?.user.full_name}</S.Title>

        <Input
          type="text"
          placeholder="Nome"
          aria-label="Nome"
          {...register('full_name', { required: true })}
        />
        <Input
          type="text"
          placeholder="Photo"
          aria-label="Photo"
          {...register('photo', { required: true })}
        />
        <Input
          type="email"
          placeholder="E-mail"
          aria-label="E-mail"
          {...register('email', { required: true })}
        />
        <Input
          type="tel"
          placeholder="Celular"
          aria-label="Celular"
          {...register('phone', { required: true })}
        />
        <Input
          type="text"
          placeholder="Instituição"
          aria-label="Instituição"
          {...register('institution', { required: true })}
        />

        <Button type="submit">Enviar</Button>
      </S.Form>
    </Edit>
  )
}

export default Page
