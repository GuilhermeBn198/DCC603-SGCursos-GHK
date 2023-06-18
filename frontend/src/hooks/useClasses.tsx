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
  enrolledUsers: EnrolledUser[] | null
  totalEnrollments: number
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
}

export interface EnrolledUser {
  id: number
  username: string
  mail: string
  phone: string
  password: string
  full_name: string
  photo: string
  institution: string
  postal_code: string
  suspended: boolean
  roleId: number
  CompletedTask: any[]
  enrollments: Enrollment[]
}

export interface Enrollment {
  id: number
  created_at: string
  updated_at: string
  userId: number
  classId: number
}

function useClasses() {
  const { data: session } = useSession()
  const { data, error, isLoading, mutate } = useSWR<ClassResponse>(
    `${process.env.NEXT_PUBLIC_API}/api/classes`,
    (params) => {
      return fetcher(params, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${session?.user.jwt}`
        }
      })
    }
  )

  useEffect(() => {
    mutate()
  }, [mutate, session?.user.jwt])

  return {
    classes: data?.data,
    isLoading,
    mutate,
    isError: data?.errors || error
  }
}

export default useClasses
