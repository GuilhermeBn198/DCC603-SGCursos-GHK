'use client'
import React from 'react'

import { SnackbarProvider } from 'notistack'
import { usePathname } from 'next/navigation'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Badges from 'components/Badges'
import Sidebar from 'components/Sidebar'
import CourseDetails from 'components/CourseDetails'

import { useGlobal } from 'contexts/global'

import * as S from './style'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  const { activeClass } = useGlobal()
  const pathname = usePathname()
  const paths = ['/signin', '/signup', '/profile']

  if (paths.includes(pathname)) return <S.Main>{children}</S.Main>

  return (
    <>
      <SnackbarProvider
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <S.Container $hasActiveCourse={!!activeClass}>
          <Sidebar small={!!activeClass} />
          <S.Main>{children}</S.Main>
          {activeClass ? <CourseDetails /> : <Badges />}
        </S.Container>
      </LocalizationProvider>
    </>
  )
}

export default Base
