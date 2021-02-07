import React from 'react';
import Layout from '../components/Layout';

const PostTemplate: React.FC = React.memo(props => {
  return (
    <Layout>
      <code>
        <pre>{JSON.stringify(props, null, 4)}</pre>
      </code>
    </Layout>
  );
});

export default PostTemplate;
