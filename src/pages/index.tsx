import React from 'react'

import CardList from '@components/post-preview/CardList'
import Layout from '@components/Layout'
import { IPost } from '@interfaces'
import PostService from '@services/Post'

interface IProps {
  allBlogPosts: Array<IPost>
}

const Index: React.FC<IProps> = ({ allBlogPosts }) => {
  return (
    <Layout>
      <CardList posts={allBlogPosts} />
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  const postService = new PostService()
  const allBlogPosts = postService.getAll(['title', 'date', 'slug', 'coverImage', 'excerpt'])

  return {
    props: { allBlogPosts }
  }
}
