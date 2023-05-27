import * as S from './styles'

type AuthProps = {
  children: React.ReactNode
}

const Auth = ({ children }: AuthProps) => {
  return (
    <S.Container>
      <S.FormContainer>{children}</S.FormContainer>
    </S.Container>
  )
}

export default Auth
