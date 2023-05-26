/* eslint-disable no-unused-vars */
import NextAuth from "next-auth"

type User = {
  username: string
  full_name: string
  photo: string
  jwt: string
  role: string
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User
  }
}

