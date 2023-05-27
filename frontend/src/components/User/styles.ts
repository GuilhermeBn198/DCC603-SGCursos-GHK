'use client'
import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  border-bottom: 1px solid #EBEBF0;

  padding: 8px 0;
 `

export const ProfileImage = styled(Image)`
  border-radius: 50%;
  background-color: #e3f2fd;
  object-fit: cover;
 `

export const Strong = styled.strong`
  font-size: 16px;
  font-weight: 500;
`
export const Text = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #334155;
`

export const Row = styled.div`
  display: flex;
  gap: 16px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
