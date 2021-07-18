import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <$header>
      <$box>
        <$logo>
          <Link href="/">
            <a>sik.dev</a>
          </Link>
        </$logo>
        <$navList>
          <$li>
            <Link href="/">
              <a>Posts</a>
            </Link>
          </$li>
          <$li>
            <Link href="/">
              <a>About</a>
            </Link>
          </$li>
        </$navList>
      </$box>
    </$header>
  )
}

const $header = styled.header`
  position: sticky;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #e5e7eb;
  background-color: #ffffff;
  transform: translateY(0%);
  position: fixed;
  top: 0px;
  z-index: 100;
`

const $box = styled.div`
  @media screen and (min-width: 640px) {
    padding: 0 2rem;
  }
  width: 100%;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const $logo = styled.div`
  text-decoration: none;
  outline: 0;
  color: #000000;
  font-size: 1.8rem;
  font-weight: 700;
`

const $navList = styled.ul`
  display: flex;
  list-style: none;

  li + li {
    margin-left: 1.25rem;
  }
`

const $li = styled.li`
  text-decoration: none;
  outline: 0;
  color: #000000;
  font-size: 1.8rem;
  font-weight: 700;

  text-decoration: none;
  outline: 0;
  color: #5f6c80;
  font-size: 1.2rem;
  &:hover {
    color: #000000;
    transition: all 0.15s ease-in-out 0s;
  }
`

export default Header
