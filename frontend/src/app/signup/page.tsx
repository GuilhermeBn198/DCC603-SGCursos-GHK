'use client'
import React, { useState } from 'react'
import { Form } from 'components/Form'
import { useForm } from 'react-hook-form'
import { Button, Input, Loading, Text } from '@nextui-org/react'

import Auth from 'templates/Auth'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Inputs = {
  username: string
  full_name: string
  institution: string
  password: string
  phone: string
  mail: string
  photo: string
  postal_code: string
  house_number: string
}

export interface Response {
  data: Data
  errors: string[]
}

export interface Data {
  id: number
  username: string
  mail: string
  phone: string
  password: string
  full_name: string
  photo: string
  institution: string
  postal_code: string
}

const SignUp = () => {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm<Inputs>()

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  async function onSubmit(data: Inputs) {
    setLoading(true)

    const response: Response = await fetch(`http://localhost:5050/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((r) => r.json())

    if (response.data) {
      await signIn('credentials', {
        username: data.username,
        password: data.password,
        redirect: false
      })
      push('/dashboard')
    }

    if (response.errors.length) {
      setLoading(false)
      setErrors(response.errors)
    }
  }

  return (
    <Auth>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Criar conta</h1>
        {errors.map((err) => (
          <Text key={err} color="red">
            {err}
          </Text>
        ))}

        <Input
          type="text"
          placeholder="Usuário"
          aria-label="Usuário"
          {...register('username', { required: true })}
        />
        <Input
          type="password"
          placeholder="Senha"
          aria-label="Senha"
          {...register('password', { required: true })}
        />
        <Input
          type="text"
          placeholder="Nome Completo"
          aria-label="Nome Completo"
          {...register('full_name', { required: true })}
        />
        <Input
          type="email"
          placeholder="E-mail"
          aria-label="E-mail"
          {...register('mail', { required: true })}
        />
        <Input
          type="tel"
          placeholder="Celular"
          aria-label="phone"
          {...register('phone', { required: true })}
        />
        <Input
          type="text"
          placeholder="Instituição"
          aria-label="Instituição"
          {...register('institution', { required: true })}
        />
        <Input
          type="text"
          placeholder="CEP"
          aria-label="CEP"
          {...register('postal_code', { required: true })}
        />
        {loading ? <Loading /> : <Button type="submit">Enviar</Button>}
      </Form>
    </Auth>
  )
}

export default SignUp
