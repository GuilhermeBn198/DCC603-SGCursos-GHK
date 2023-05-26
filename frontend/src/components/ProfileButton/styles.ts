'use client'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  width: fit-content;
  gap: 1.6rem;

  margin-bottom: 3.2rem;

  img {
    object-fit: cover;
  }
`

export const Profile = styled(Image)`
  border-radius: 50%;
  background-color: #e3f2fd;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Title = styled.strong`
  font-size: 2rem;
  font-weight: 600;
`
export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: #334155;
`