import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

function BlogPage() {
    const data = useStaticQuery(graphql`
    query
{
  site {
    siteMetadata {
      title
      description
    }
  }
  allFile {
    nodes {
      name
    }
  }
}

`);

    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here
                <ul>
                    {data.allFile.nodes.map((node) => (
                        <li key={node.name}>{node.name}</li>
                    ))}
                </ul>
            </p>
        </Layout>
    );
}

export default BlogPage; 