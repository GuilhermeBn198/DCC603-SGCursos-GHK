'use client'
import React, { useState } from 'react'

import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button, CircularProgress, TextField } from '@mui/material'

import Auth from 'templates/Auth'

import { Form } from 'components/Form'

type Inputs = {
  username: string
  password: string
}

const SignIn = () => {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const { register, handleSubmit } = useForm<Inputs>()

  const [failed, setFailed] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(data: Inputs) {
    setLoading(true)
    const resp = await signIn('credentials', { ...data, redirect: false })
    if (resp?.ok && resp.url) {
      push((searchParams.get('callbackUrl') as string) || '/dashboard')
      setFailed(false)
    } else {
      setFailed(true)
      console.error('Falha no login')
    }
    setLoading(false)
  }

  return (
    <Auth>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Entrar</h1>

        {failed ? <p>Usuário ou senha inválidos</p> : null}

        <TextField
          type="text"
          label="Nome"
          {...register('username', { required: true })}
        />
        <TextField
          type="password"
          label="Senha"
          {...register('password', { required: true })}
        />

        <p>
          Primeira vez aqui? <Link href="/signup">Crie uma conta</Link>
        </p>

        {loading ? (
          <CircularProgress sx={{ alignSelf: 'center' }} />
        ) : (
          <Button type="submit" variant="contained">
            Enviar
          </Button>
        )}
      </Form>
    </Auth>
  )
}

export default SignIn
