'use client'

import { SGCLass } from 'hooks/useClasses'
import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react'

export type GlobalContextData = {
  activeClass: SGCLass | undefined
  setActiveClass: Dispatch<SetStateAction<SGCLass | undefined>>
}

export const GlobalContextDefaultValues = {
  activeClass: undefined,
  setActiveClass: () => []
}

export const GlobalContext = createContext<GlobalContextData>(
  GlobalContextDefaultValues
)

export type GlobalProviderProps = {
  children: React.ReactNode
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [activeClass, setActiveClass] = useState<SGCLass | undefined>()

  return (
    <GlobalContext.Provider
      value={{
        activeClass,
        setActiveClass
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobal = () => useContext(GlobalContext)

export { GlobalProvider, useGlobal }
