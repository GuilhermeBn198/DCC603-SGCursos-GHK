import React from 'react'
import { Modal, Text } from '@nextui-org/react'

type AppModalProps = {
  title: string
  visible: boolean
  children: React.ReactNode
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AppModal = ({ title, children, visible, setVisible }: AppModalProps) => {
  const closeHandler = () => {
    setVisible(false)
  }

  return (
    <Modal
      closeButton
      blur
      aria-labelledby={title}
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id={title} size={18}>
          {title}
        </Text>
      </Modal.Header>

      {children}
    </Modal>
  )
}

export default AppModal