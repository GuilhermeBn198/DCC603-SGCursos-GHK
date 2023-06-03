import { Raleway } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import StyledComponentsRegistry from './registry'
import { NextAuthProvider } from './providers'

import { GlobalStyle } from 'styles/global'
import { GlobalProvider } from 'contexts/global'

import Base from 'components/Base'

const inter = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'SG Cursos',
  description: 'Sistema de gerenciamento de cursos da UFRR'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <NextTopLoader />
      <body className={inter.className}>
        <NextAuthProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <GlobalProvider>
              <Base>{children}</Base>
            </GlobalProvider>
          </StyledComponentsRegistry>
        </NextAuthProvider>
      </body>
    </html>
  )
}
