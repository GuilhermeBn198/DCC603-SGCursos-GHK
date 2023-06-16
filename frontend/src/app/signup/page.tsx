'use client'
import React, { useState } from 'react'

import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Button, CircularProgress, TextField } from '@mui/material'

import Auth from 'templates/Auth'

import { Form } from 'components/Form'

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

    const response: Response = await fetch(
      `http://${process.env.NEXT_PUBLIC_API}/api/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    ).then((r) => r.json())

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
          <p key={err} color="red">
            {err}
          </p>
        ))}

        <TextField
          type="text"
          label="Usuário"
          {...register('username', { required: true })}
        />
        <TextField
          type="password"
          label="Senha"
          {...register('password', { required: true })}
        />
        <TextField
          type="text"
          label="Nome Completo"
          {...register('full_name', { required: true })}
        />
        <TextField
          type="email"
          label="E-mail"
          {...register('mail', { required: true })}
        />
        <TextField
          type="tel"
          label="Celular"
          {...register('phone', { required: true })}
        />
        <TextField
          type="text"
          label="Instituição"
          {...register('institution', { required: true })}
        />
        <TextField
          type="text"
          label="CEP"
          {...register('postal_code', { required: true })}
        />
        {loading ? (
          <CircularProgress sx={{ alignSelf: 'center' }} />
        ) : (
          <Button type="submit" variant="contained">
            Criar conta
          </Button>
        )}
      </Form>
    </Auth>
  )
}

export default SignUp
