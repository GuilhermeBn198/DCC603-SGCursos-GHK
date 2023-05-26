'use client'
import styled from 'styled-components'
import Image from 'next/image'

export const NextImage = styled(Image)`
  position: absolute;
`

type LogoProps = {
  style?: React.CSSProperties
}

const Logo = ({ style }: LogoProps) => {
  return (
    <NextImage
      alt="SG Cursos"
      src="/logo.png"
      width={150}
      height={58}
      style={style}
    />
  )
}

export default Logo
