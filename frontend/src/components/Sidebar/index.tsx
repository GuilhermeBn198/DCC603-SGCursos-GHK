'use client'
import React from 'react'

import { signOut, useSession } from 'next-auth/react'
import {
  Home,
  Person,
  SignOut,
  Stack,
  Repo,
  Terminal,
  MortarBoard
} from '@styled-icons/octicons'

import Logo from 'components/Logo'
import * as S from './styles'

export type SidebarProps = {
  small?: boolean
}

const Sidebar = ({ small = false }: SidebarProps) => {
  const { data } = useSession()

  const importantRoles = [1, 2]

  return (
    <S.SidebarContainer $small={small}>
      {small ? null : (
        <Logo
          style={{ top: '24px', left: '50%', transform: 'translateX(-50%)' }}
        />
      )}
      <S.SidebarLink href="/">
        <Home size={16} />
        <p>Início</p>
      </S.SidebarLink>
      {data && importantRoles.includes(data?.user.roleId) && (
        <S.SidebarLink href="/categories">
          <Stack size={16} />
          <p>Categorias</p>
        </S.SidebarLink>
      )}
      {data && importantRoles.includes(data?.user.roleId) && (
        <S.SidebarLink href="/courses">
          <Terminal size={16} />
          <p>Cursos</p>
        </S.SidebarLink>
      )}
      {data && importantRoles.includes(data?.user.roleId) && (
        <S.SidebarLink href="/classes">
          <Repo size={16} />
          <p>Turmas</p>
        </S.SidebarLink>
      )}
      {data && importantRoles.includes(data?.user.roleId) && (
        <S.SidebarLink href="/users">
          <Person size={16} />
          <p>Usuários</p>
        </S.SidebarLink>
      )}
      <S.SidebarLink href="/certificates">
        <MortarBoard size={16} />
        <p>Meus certificados</p>
      </S.SidebarLink>
      <S.SidebarLink as="button" onClick={() => signOut()}>
        <>
          <SignOut size={16} />
          <p>Sair</p>
        </>
      </S.SidebarLink>
    </S.SidebarContainer>
  )
}

export default Sidebar
