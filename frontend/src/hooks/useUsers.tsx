import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export interface UserResponse {
  data: User[]
  errors: any
}

export interface User {
  id: number
  username: string
  full_name: string
  mail: string
  role: string
  photo: string
  institution: string
  badges: any[]
}

function useUsers() {
  const { data, error, isLoading } = useSWR<UserResponse>(
    `http://localhost:5050/users`,
    fetcher
  )

  return {
    users: data?.data,
    isLoading,
    isError: data?.errors || error
  }
}

export default useUsers
