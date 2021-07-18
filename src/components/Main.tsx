import React from 'react'
import styled from '@emotion/styled'

export interface MainProps {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <$main>{children}</$main>
}

const $main = styled.main`
  @media screen and (min-width: 640px) {
    padding: 0 2rem;
  }
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
`

export default Main
