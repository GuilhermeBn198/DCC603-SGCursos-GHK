import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export interface ClassResponse {
  data: Class[]
  errors: any
}

export interface Class {
  id: string
  slug: string
  course_name: string
  course_photo: string
  course_workload: number
  start_date: string
  end_date: string
  teacher: string
  course_category: string
}

function useClasses() {
  const { data, error, isLoading } = useSWR<ClassResponse>(
    `http://localhost:5050/classes`,
    fetcher
  )

  return {
    classes: data?.data,
    isLoading,
    isError: data?.errors || error
  }
}

export default useClasses
