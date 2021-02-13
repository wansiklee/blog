import React from 'react';
import Layout from '../components/Layout';

interface IPostProps {
  pageContext?: {
    title: string;
    date: string;
    html: string;
  }
}

const PostTemplate: React.FC<IPostProps> = (props) => {
  const { pageContext: { title, date, html } } = props;

  return (
    <Layout>
      <h2>{title}</h2>
      <h4>{date}</h4>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default PostTemplate;
