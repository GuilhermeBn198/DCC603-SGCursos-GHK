'use client'
import React, { useState } from 'react'

import { Button } from '@nextui-org/react'

import { Content } from 'components/Content'
import ClassItem from 'components/ClassItem'
import CreateClassModal from 'components/CreateClassModal'

import useClasses from 'hooks/useClasses'

import * as S from './styles'

const Classes = () => {
  const { classes } = useClasses()

  const [createClass, setCreateClass] = useState(false)

  return (
    <Content>
      <h1>Turmas</h1>

      <Button
        type="submit"
        size="sm"
        style={{ width: 'fit-content' }}
        onPress={() => setCreateClass(true)}
      >
        Criar nova turma
      </Button>

      <S.ClassList>
        {classes?.map((c) => (
          <ClassItem key={c.id} {...c} />
        ))}
      </S.ClassList>

      <CreateClassModal visible={createClass} setVisible={setCreateClass} />
    </Content>
  )
}

export default Classes
