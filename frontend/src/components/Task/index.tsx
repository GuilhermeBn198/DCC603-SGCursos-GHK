import { ChangeEvent } from 'react'

import { Beaker, File, Globe } from '@styled-icons/octicons'

import { TypeTask } from 'components/CourseDetails'

import * as S from './styles'

type TaskProps = {
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: boolean) => void
} & TypeTask

const Task = ({ type = 'globe', onChange, title, done }: TaskProps) => {
  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    if (onChange) onChange(e.target.checked)
  }

  const icons = {
    globe: <Globe />,
    file: <File />,
    beaker: <Beaker />
  }

  return (
    <S.Container>
      <S.Row>
        <S.IconWrapper type={type}>{icons[type]}</S.IconWrapper>
        <S.Text>{title}</S.Text>
      </S.Row>
      <input type="checkbox" onChange={onInputChange} defaultChecked={done}/>
    </S.Container>
  )
}

export default Task
