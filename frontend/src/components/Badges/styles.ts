'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  overflow: auto;

  padding: 2.4rem;
  border-left: 0.1rem solid #EBEBF0;
`

export const Title = styled.strong`
  font-size: 1.8rem;
  font-weight: 400;
`

export const AdesivosGrid = styled.div`
  display: grid;
  gap: 1.6rem;

  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`

export const Badge = styled(Image)`
  object-fit: cover;
`