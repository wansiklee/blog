import React from 'react'
import styled from '@emotion/styled'

import { IPost } from '@interfaces'
import Card from './Card'

interface ICardListProps {
  posts: Array<IPost>
}

const CardList: React.FC<ICardListProps> = (props) => {
  const { posts } = props

  return (
    <$section>
      <$grid>
        {posts.map((post) => (
          <Card
            key={post.slug}
            category={post.category}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </$grid>
    </$section>
  )
}

const $section = styled.section``

const $grid = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-auto-rows: minmax(160px, auto);
  grid-gap: 2rem;
  margin-bottom: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(15.5rem, 1fr));
`

export default CardList
