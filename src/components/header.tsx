import React, { useCallback, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { graphql, Link, useStaticQuery } from "gatsby";

export interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header css={headerContainerStyle} >
      <div css={headerStyle}>
        <Link css={logoStyle} to='/'>{data?.site?.siteMetadata?.title}</Link>
        <ul css={listStyle}>
          <li><Link css={linkStyle} to='/'>Posts</Link></li>
          <li><Link css={linkStyle} to='/'>About</Link></li>
        </ul>
      </div>
    </header>
  );
}

const headerContainerStyle = css`
  position: sticky;
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #E5E7EB;
  background-color: #ffffff;
  transform: translateY(0%);
  position: fixed;
  top: 0px;
  z-index: 100;
`;

const headerStyle = css`
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
`;

const logoStyle = css`
  text-decoration: none;
  outline: 0;
  color: #000000;
  font-size: 1.8rem;
  font-weight: 700;
`;

const linkStyle = css`
  text-decoration: none;
  outline: 0;
  color: #5f6c80;
  font-size: 1.2rem;
  &:hover {
    color: #000000;
    transition: all 0.15s ease-in-out 0s;
  }
`;

const listStyle = css`
  display: flex;
  list-style: none;

  li + li {
    margin-left: 1.25rem;
  }
`;

export default Header;
