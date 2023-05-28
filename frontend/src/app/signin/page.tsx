'use client'
import React, { useState } from 'react'

import Auth from 'templates/Auth'

import { useForm } from 'react-hook-form'
import { Button, Input, Loading, Text } from '@nextui-org/react'

import { Form } from 'components/Form'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

type Inputs = {
  username: string
  password: string
}

const SignIn = () => {
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const { register, handleSubmit } = useForm<Inputs>()

  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)

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

        {failed ? <Text color="red">Usuário ou senha inválidos</Text> : null}

        <Input
          type="text"
          placeholder="Nome"
          aria-label="Nome"
          {...register('username', { required: true })}
        />
        <Input
          type="password"
          placeholder="Senha"
          aria-label="Senha"
          {...register('password', { required: true })}
        />

        <p>
          Primeira vez aqui? <Link href="/signup">Crie uma conta</Link>
        </p>
        {loading ? <Loading /> : <Button type="submit">Enviar</Button>}
      </Form>
    </Auth>
  )
}

export default SignIn
