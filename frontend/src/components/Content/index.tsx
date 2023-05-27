'use client'
import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.4rem;
  padding-top: 5.4rem;

  gap :2.4rem;
  height: -webkit-fill-available;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 600;
  }
`