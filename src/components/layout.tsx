import React from 'react'
import styled from '@emotion/styled'

import Header from './Header'
import Main from './Main'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <$layout>
      <Header />
      <Main>{children}</Main>
    </$layout>
  )
}

const $layout = styled.div`
  min-height: 100vh;
  padding-top: 6rem;
`

export default Layout
