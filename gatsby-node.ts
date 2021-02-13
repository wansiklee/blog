import { CreatePagesArgs } from 'gatsby';
import { Query } from './src/types/graphql-types';
import path from 'path';

export const createPages = async ({ actions, graphql }: CreatePagesArgs) => {
  const { createPage } = actions;
  
  const { data, errors } = await graphql<Query>(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if(errors) throw errors;

  data.allMarkdownRemark.edges.forEach(({ node }: any) => {
    createPage({
      path: node.frontmatter.title,
      context: {
          html: node.html,
          title: node.frontmatter.title,
      },
      component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
    });
  });
};