import React from 'react'
import { css } from '@emotion/react'

export interface MainProps {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main css={mainStyle}>{children}</main>
}

const mainStyle = css`
  @media screen and (min-width: 640px) {
    padding: 0 2rem;
  }
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
`

export default Main
