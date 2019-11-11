import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {

  const postTitle = data.contentfulBlogPost.title
  return  (
    <Layout>
      <SEO title="Home" />
      <h1>{postTitle}</h1>
      <p>Tu jakies pierdolenie o helenie.</p>
      <Link to="/blog/">Wróć do bloga</Link>
    </Layout>
  )
}


export default BlogPost

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            slug
        }
    }
`;
