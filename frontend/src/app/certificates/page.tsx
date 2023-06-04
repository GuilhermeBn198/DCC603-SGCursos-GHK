'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import { Content } from 'components/Content'

import { SGCLass } from 'hooks/useClasses'
import dayjs from 'dayjs'

export interface CertificateResponse {
  data: Certificate[]
  errors: any[]
}

export interface Certificate {
  id: number
  uuid: string
  classId: number
  userId: number
  class: SGCLass
  createdAt: string
}

const Certificates = () => {
  const { data: session } = useSession()

  const [certificates, setCertificates] = useState<Certificate[]>()

  async function getCertificatesByUser() {
    if (session?.user.jwt) {
      const response = await fetch(
        `http://localhost:5050/api/certificates/${session.user.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session.user.jwt}`
          }
        }
      ).then((r) => r.json())
      setCertificates(response.data)
    }
  }

  useEffect(() => {
    getCertificatesByUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user.jwt])

  return (
    <Content>
      <h1>Meus certificados</h1>

      {certificates?.map((c) => (
        <p key={c.uuid}>
          {`${c.class.course.name} - Data geração: ${dayjs(c.createdAt).format(
            'DD/MM/YYYY'
          )} - Código: ${c.uuid}`}
        </p>
      ))}
    </Content>
  )
}

export default Certificates
