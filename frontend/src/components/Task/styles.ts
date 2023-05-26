import styled, { css } from 'styled-components'

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.8rem;

  background: white;

  cursor: pointer;
 `

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
 `

export const Text = styled.p`
  font-size: 1.6rem;
 `

const colors = {
  globe: '#03a9f4',
  file: '#f44336',
  beaker: '#4caf50'
}

type IconWrapperProps = {
  type: 'globe' | 'file' | 'beaker'
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ type }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors[type]};

    border-radius: 0.8rem;

    width: 4rem;
    height: 4rem;

    svg {
      height: 2.4rem;
      fill: white;
    }
  `}
`