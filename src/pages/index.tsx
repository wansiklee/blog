import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi WANSIK</h1>
      <p>Welcome to iamsik blog</p>
    </Layout>
  );
}

export default IndexPage;
