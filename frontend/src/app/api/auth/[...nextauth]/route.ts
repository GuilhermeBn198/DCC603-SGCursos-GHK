import NextAuth, { NextAuthOptions, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

type Credentials = {
  username: string
  password: string
}

export interface Response {
  data: User
  errors: any[]
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/signin'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Usuário', type: 'text' },
        password: { label: 'Senha', type: 'password' }
      },
      async authorize(credentials) {
        const { username, password } = credentials as Credentials

        try {
          const data: Response = await fetch(`http://localhost:5050/api/signin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username,
              password
            })
          }).then((r) => r.json())

          if (!data.errors.length) {
            return data.data
          } else {
            return null
          }
        } catch {
          throw new Error('Falha ao fazer login')
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account && user) {
        return {
          ...token,
          user
        }
      }

      return token
    },

    async session({ session, token }: any) {
      session.user = token.user
      return session
    }
  },
  session: { maxAge: 60 * 60 * 12 },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#03a9f4", // Hex color code
    logo: "https://github.com/acauanrr/sgc-project/blob/main/frontend/public/images/icon.png?raw=true", // Absolute URL to image
    buttonText: "#0F172A" // Hex color code
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
