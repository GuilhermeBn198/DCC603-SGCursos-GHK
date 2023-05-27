'use client'
import React from 'react'
import { Form } from 'components/Form'
import { useForm } from 'react-hook-form'
import { Button, Input } from '@nextui-org/react'

import Auth from 'templates/Auth'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Inputs = {
  username: string
  password: string
  full_name: string
  email: string
  phone: string
  photo: string
  institution: string
}

const SignUp = () => {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()

  async function onSubmit(data: Inputs) {
    await fetch(`http://localhost:5050/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((r) => r.json())

    await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false
    })
    push('/dashboard')
  }

  return (
    <Auth>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Criar conta</h1>
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
      </Form>
    </Auth>
  )
}

export default SignUp
