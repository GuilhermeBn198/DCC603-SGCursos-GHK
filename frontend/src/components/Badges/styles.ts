'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  overflow: auto;

  padding: 24px;
  border-left: 1px solid #EBEBF0;
`

export const Title = styled.strong`
  font-size: 18px;
  font-weight: 400;
`

export const AdesivosGrid = styled.div`
  display: grid;
  gap: 16px;

  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`

export const Badge = styled(Image)`
  object-fit: cover;
`