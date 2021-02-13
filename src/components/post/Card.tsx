import React from 'react'
import Link from 'gatsby-link';
import { css } from "@emotion/react";

interface ICardProps {
  path: string;
  title: string;
  date: string;
  content: string;
}

const Card: React.FC<ICardProps> = (props) => {
  const { path, title, date, content } = props;
  
  return (
    <Link to={`/posts${path}`}>
      <article css={cardStyle}>
        <h2>{title}</h2>
        <time dateTime={date}>{date}</time>
        <p>{content}</p>
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
    // background-color: #F3F4F6;
  }
`;

export default Card;