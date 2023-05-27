import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #EBEBF0;

  overflow: auto;

  padding: 24px;
  gap: 16px;
 `

export const GoBack = styled.button`
  width: fit-content;
  border: none;
  font-size: 14px;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  min-height: 400px;
  position: relative;
`

export const CoursePhoto = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-top: 16px;
`

export const Text = styled.p`
  font-size: 16px;
  line-height: normal;

  text-align: justify;
  text-indent: 50px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 24px 0;
`

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const Counter = styled.p`
  font-size: 12px;
  color:#ababab;
`

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
`