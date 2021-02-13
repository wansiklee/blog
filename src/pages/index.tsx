import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Query } from "../types/graphql-types";
import CardList from "../components/post/CardList";
import Card from "../components/post/Card";

const LatestPostListQuery = graphql`
  query LatestPostListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 80)
          frontmatter {
            title
            path
            date(formatString: "YYYY. MM. DD")
          }
          id
        }
      }
    }
  }
`;

const IndexPage: React.FC = () => {
  const data = useStaticQuery<Query>(LatestPostListQuery);

  return (
    <Layout>
      <SEO title="Home" />
      <CardList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id} path={node.frontmatter.path} title={node.frontmatter.title} date={node.frontmatter.date} content={node.excerpt}/>
        ))}
      </CardList>
    </Layout>
  );
}

export default IndexPage;
