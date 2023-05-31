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
  enrolled: boolean
}

export interface Course {
  id: number
  workload: number
  name: string
  photo: string
  description: string
  categoryId: number
  category: Category
  tasks: Task[]
}

export interface Task {
  id: number
  title: string
  description: string
  external_link: string
  courseId: number
}

export type CourseDetailsTask = {
  completed: boolean
  completedTaskId: number
} & Task

export interface Category {
  id: number
  name: string
  description: string
}

function useClasses() {
  const { data: session } = useSession()
  const { data, error, isLoading, mutate } = useSWR<ClassResponse>(
    `http://localhost:5050/api/classes`,
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
    classes: data?.data,
    isLoading,
    isError: data?.errors || error
  }
}

export default useClasses
