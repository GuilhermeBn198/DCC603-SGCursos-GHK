'use client'
import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 24px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 8px;
  background-color: white;

  padding: 16px;

  width: 400px;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .buttonsWrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
 `
