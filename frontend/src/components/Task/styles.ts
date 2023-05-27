import styled, { css } from 'styled-components'

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px;

  background: white;

  cursor: pointer;
 `

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
 `

export const Text = styled.p`
  font-size: 16px;
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

    border-radius: 8px;

    width: 40px;
    height: 40px;

    svg {
      height: 24px;
      fill: white;
    }
  `}
`