import React from 'react'

import Modal from '@mui/material/Modal'

import * as S from './styles'

type AppModalProps = {
  title: string
  visible: boolean
  children: React.ReactNode
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AppModal = ({ visible, setVisible, children, title }: AppModalProps) => {
  const closeHandler = () => {
    setVisible(false)
  }

  return (
    <Modal open={visible} onClose={closeHandler}>
      <S.ModalContainer>
        <S.Title>{title}</S.Title>
        {children}
      </S.ModalContainer>
    </Modal>
  )
}

export default AppModal
