/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Global, css } from "@emotion/react";
import Header from "./Header";
import Main from "./Main";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div css={layoutStyle}>
      <Global styles={globalStyle} />
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

const layoutStyle = css`
  min-height: 100vh;
  padding-top: 6rem;
`;

const globalStyle = css`
  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;
    }
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default Layout
