import React from "react";
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
    <header css={headerContainerStyle}>
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
  height: 4rem;
`;

const headerStyle = css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 0 auto;
  max-width: 760px;
`;

const logoStyle = css`
  text-decoration: none;
  outline: 0;
  color: #00bbff;
  font-size: 1.125rem;
`;

const linkStyle = css`
  text-decoration: none;
  outline: 0;
  color: #00bbff;
  font-size: 1.125rem;
  &:hover {
    color: #0695c9;
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