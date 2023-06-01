import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export interface UserResponse {
  data: User[]
  errors: string[]
}

export interface User {
  id: number
  username: string
  mail: string
  phone: string
  password: string
  full_name: string
  photo: string
  institution: string
  postal_code: string
  roleId: number
  role: Role
  jwt: string
}

export interface Role {
  id: number
  name: string
}

function useUsers() {
  const { data: session } = useSession()
  const { data, error, isLoading, mutate } = useSWR<UserResponse>(
    `http://localhost:5050/api/users`,
    (params) =>
      fetcher(params, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${session?.user.jwt}`
        }
      })
  )

  useEffect(() => {
    mutate()
  }, [mutate, session?.user.jwt])

  return {
    users: data?.data,
    isLoading,
    isError: data?.errors || error
  }
}

export default useUsers
