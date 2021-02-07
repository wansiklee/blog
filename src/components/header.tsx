import React from "react";
import { css } from "@emotion/react";

export interface HeaderProps {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header css={headerStyle}>{siteTitle}</header>
  );
}

const headerStyle = css`

`;

export default Header;