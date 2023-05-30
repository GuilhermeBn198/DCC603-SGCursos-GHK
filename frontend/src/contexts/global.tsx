'use client'

import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

export type GlobalContextData = {
  activeCourse: number | undefined
  setActiveCourse: Dispatch<SetStateAction<number | undefined>>
}

export const GlobalContextDefaultValues = {
  activeCourse: undefined,
  setActiveCourse: () => ([])
}

export const GlobalContext = createContext<GlobalContextData>(
  GlobalContextDefaultValues
)

export type GlobalProviderProps = {
  children: React.ReactNode
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [activeCourse, setActiveCourse] = useState<number | undefined>()

  return (
    <GlobalContext.Provider
      value={{
        activeCourse,
        setActiveCourse
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobal = () => useContext(GlobalContext)

export { GlobalProvider, useGlobal }
