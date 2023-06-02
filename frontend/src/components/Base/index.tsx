'use client'
import React from 'react'

import { usePathname } from 'next/navigation'

import Badges from 'components/Badges'
import Sidebar from 'components/Sidebar'
import CourseDetails from 'components/CourseDetails'

import * as S from './style'
import { useGlobal } from 'contexts/global'
import { useSSR } from '@nextui-org/react'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  const { isBrowser } = useSSR()

  const { activeClass } = useGlobal()
  const pathname = usePathname()
  const paths = ['/signin', '/signup', '/profile']

  if (paths.includes(pathname)) return <S.Main>{children}</S.Main>

  return isBrowser ? (
    <S.Container $hasActiveCourse={!!activeClass}>
      <Sidebar small={!!activeClass} />
      <S.Main>{children}</S.Main>
      {activeClass ? <CourseDetails /> : <Badges />}
    </S.Container>
  ) : null
}

export default Base
