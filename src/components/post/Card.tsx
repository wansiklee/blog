import React from 'react'
import Link from 'gatsby-link';
import { css } from "@emotion/react";
import { MarkdownRemarkFrontmatter } from '../../types/graphql-types';
import Img from "gatsby-image";

interface ICardProps {
  data: MarkdownRemarkFrontmatter;
  content: string;
}

const Card: React.FC<ICardProps> = (props) => {
  const { data: { path, title, date, cover }, content } = props;
  
  return (
    <Link to={`/posts${path}`}>
      <article css={cardStyle}>
        <Img fluid={cover.childImageSharp.fluid} />
        <h2 css={titleStyle}>{title}</h2>
        <time dateTime={date} css={dateStyle}>{date}</time>
        <p css={contentStyle}>{content}</p>
      </article>
    </Link>
  );
}

const cardStyle = css`
  color: #000000;
  padding: 1rem 0;
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: translateY(-0.625rem);
  }
`;

const titleStyle = css`
  font-size: 1.2rem;
  height: 3.125rem;
  // white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const dateStyle = css`
  font-size: 0.75rem;
  color: #bbbbbb;
`;

const contentStyle = css`
  font-size: 1rem;
  color: #7d7d7d;
`;

export default Card;