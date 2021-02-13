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
              path
              date(formatString: "YYYY-MM-DD HH:mm:ss")
            }
          }
        }
      }
    }
  `);

  if(errors) throw errors;

  data.allMarkdownRemark.edges.forEach(({ node }: any) => {
    createPage({
      path: '/posts' + node.frontmatter.path,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
      },
      component: path.resolve(__dirname, './src/templates/PostTemplate.tsx'),
    });
  });
};