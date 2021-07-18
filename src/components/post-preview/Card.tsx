import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

interface ICardProps {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
  category: string
}

const Card: React.FC<ICardProps> = (props) => {
  const { title, coverImage, date, excerpt, slug, category } = props

  return (
    <Link as={`/${category}/${slug}`} href={`/${category}/${slug}`}>
      <$area>
        <img width="300" src={coverImage} />
        <$title>{title}</$title>
        <$excerpt>{excerpt}</$excerpt>
        <$date dateTime={date}>{date}</$date>
      </$area>
    </Link>
  )
}

const $area = styled.article`
  color: #000000;
  padding: 1rem 0;
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: translateY(-0.625rem);
  }
`

const $title = styled.h2`
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const $excerpt = styled.p`
  font-size: 1rem;
  color: #7d7d7d;
  height: 3.75rem;
`

const $date = styled.time`
  font-size: 0.75rem;
  color: #bbbbbb;
`

export default Card
