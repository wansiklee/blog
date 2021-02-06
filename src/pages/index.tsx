import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi WANSIK</h1>
      <p>Welcome to iamsik blog</p>
      <p>Now go build something great.</p>
    </Layout>
  );
}

export default IndexPage;
