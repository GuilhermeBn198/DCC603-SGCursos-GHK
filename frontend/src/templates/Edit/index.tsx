import * as S from './styles'

type EditProps = {
  children: React.ReactNode
}

const Edit = ({ children }: EditProps) => {
  return (
    <S.Container>
      <S.FormContainer>{children}</S.FormContainer>
    </S.Container>
  )
}

export default Edit
