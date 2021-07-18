import React from 'react'
import { css } from '@emotion/react'

interface ICardProps {
  content: string
}

const Card: React.FC<ICardProps> = (props) => {
  const { content } = props

  return (
    <></>
    // <Link to={`/posts${path}`}>
    //   <article css={cardStyle}>
    //     <Img fluid={cover.childImageSharp.fluid} />
    //     <h2 css={titleStyle}>{title}</h2>
    //     <p css={contentStyle}>{content}</p>
    //     <time dateTime={date} css={dateStyle}>{date}</time>
    //   </article>
    // </Link>
  )
}

const cardStyle = css`
  color: #000000;
  padding: 1rem 0;
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: translateY(-0.625rem);
  }
`

const titleStyle = css`
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const dateStyle = css`
  font-size: 0.75rem;
  color: #bbbbbb;
`

const contentStyle = css`
  font-size: 1rem;
  color: #7d7d7d;
  height: 3.75rem;
`

export default Card
