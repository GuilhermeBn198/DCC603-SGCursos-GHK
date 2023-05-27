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
  gap: 16px;

  margin-bottom: 32px;

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
  gap: 8px;
`

export const Title = styled.strong`
  font-size: 20px;
  font-weight: 600;
`
export const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #334155;
`