import React from "react";
import { css } from "@emotion/react";

export interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {

  return (
    <main css={mainStyle}>{children}</main>
  );
}

const mainStyle = css`
  height: 100%;
  padding: 0 1rem;
  padding-top: 2.5rem;
  margin: 0 auto;
  max-width: 1024px;
`;

export default Main;