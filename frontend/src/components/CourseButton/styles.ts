'use client'
import Image from 'next/image'
import styled, { css } from 'styled-components'

type ContainerProps = {
  $small: boolean
  $active: boolean
}

export const Container = styled.button<ContainerProps>`
  ${({ $small, $active }) => css`
    display: flex;
    flex-direction: row;

    border: 1px solid #ebebf0;
    background-color: white;
    text-decoration: none;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s;

    ${$small
      ? css`
          border: none;
          ${Content} {
            padding: 16px;
            justify-content: center;
            gap: 16px;
          }

          ${Subtitle} {
            font-size: 12px;
          }

          ${Strong} {
            font-size: 16px;
            margin: 0;
          }

          ${CourseImage}, ${CouseImageContainer} {
            border-radius: 8px;
          }
        `
      : null}

    &:hover {
      img {
        transform: scale(1.2);
      }
    }

    ${$active
      ? css`
          border-radius: 8px;
          box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
            rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        `
      : null}
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 42px;
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
  font-size: 16px;
  font-weight: 300;
  color: #ababab;
`

export const Strong = styled.strong`
  font-size: 24px;
  font-weight: 500;

  margin-top: auto;
  max-width: 300px;
`
