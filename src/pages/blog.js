import React from "react";
import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
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
  allMdx(sort: { fields: frontmatter___date, order: DESC }) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      body
    }
  }
}

`);

    return (
        <Layout pageTitle="My Blog Posts">
            {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
        </Layout>
    );
}

export default BlogPage; 