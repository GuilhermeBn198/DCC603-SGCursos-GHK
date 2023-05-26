'use client'
import Image from 'next/image'
import styled, { css } from 'styled-components'

type ContainerProps = {
  small: boolean
  active: boolean
}

export const Container = styled.button<ContainerProps>`
  ${({ small, active }) => css`
    display: flex;
    flex-direction: row;

    border: 0.1rem solid #ebebf0;
    background-color: white;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s;

    ${small
      ? css`
          border: none;
          ${Content} {
            padding: 1.6rem;
            justify-content: center;
            gap: 1.6rem;
          }

          ${Subtitle} {
            font-size: 1.2rem;
          }

          ${Strong} {
            font-size: 1.6rem;
            margin: 0;
          }

          ${CourseImage}, ${CouseImageContainer} {
            border-radius: 0.8rem;
          }
        `
      : null}

    &:hover {
      img {
        transform: scale(1.2);
      }
    }

    ${active
      ? css`
          border-radius: 0.8rem;
          box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
            rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        `
      : null}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 4.2rem;
  align-self: stretch;

  transition: all 0.2s;

  * {
    align-self: flex-start;
    text-align: start;
  }
`

export const CouseImageContainer = styled.div`
  display: flex;
  overflow: hidden;
`

export const CourseImage = styled(Image)`
  transition: all 0.2s;
  object-fit: cover;
`

export const Subtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  color: #ababab;
`

export const Strong = styled.strong`
  font-size: 2.4rem;
  font-weight: 500;

  margin-top: auto;
  max-width: 30rem;
`
