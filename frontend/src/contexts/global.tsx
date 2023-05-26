'use client'

import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

export type GlobalContextData = {
  activeCourse: string | undefined
  setActiveCourse: Dispatch<SetStateAction<string | undefined>>
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
  const [activeCourse, setActiveCourse] = useState<string | undefined>()

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
