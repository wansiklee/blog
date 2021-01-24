import { CreatePagesArgs } from 'gatsby';

export const createPages = async ({ actions }: CreatePagesArgs) => {
  const { createPage } = actions;
  console.log('typescript!');
};