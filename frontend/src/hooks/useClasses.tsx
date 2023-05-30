import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export interface ClassResponse {
  data: SGCLass[]
  errors: any[]
}

export interface SGCLass {
  id: number
  start_date: string
  end_date: string
  courseId: number
  course: Course
}

export interface Course {
  id: number
  workload: number
  name: string
  photo: string
}

function useClasses() {
  const { data: session } = useSession()
  const { data, error, isLoading, mutate } = useSWR<ClassResponse>(
    `http://localhost:5050/api/classes`,
    (params) =>
      fetcher(params, {
        headers: {
          Authorization: `Bearer ${session?.user.jwt}`
        }
      })
  )

  useEffect(() => {
    mutate()
  }, [mutate, session?.user.jwt])

  return {
    classes: data?.data,
    isLoading,
    isError: data?.errors || error
  }
}

export default useClasses
