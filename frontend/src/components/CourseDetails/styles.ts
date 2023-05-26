import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 0.1rem solid #EBEBF0;

  overflow: auto;

  padding: 2.4rem;
  gap: 1.6rem;
 `

export const GoBack = styled.button`
  width: fit-content;
  border: none;
  font-size: 1.4rem;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  min-height: 40rem;
  position: relative;
`

export const CoursePhoto = styled(Image)`
  border-radius: 0.8rem;
  object-fit: cover;
`

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  margin-top: 1.6rem;
`

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: normal;

  text-align: justify;
  text-indent: 5rem;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 2.4rem 0;
`

export const H3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
`

export const Counter = styled.p`
  font-size: 1.2rem;
  color:#ababab;
`

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
`