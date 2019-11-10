import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Blog = ({ pageContext, data }) => {

  const posts = data.allContentfulBlogPost.edges
  const count = data.allContentfulBlogPost.totalCount
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{pageContext.slug}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <h3>Liczba postów: {count}</h3>
      <ul>
        {posts.map(post => <Link to={`/blog/${post.node.slug}`}><li>{post.node.title}</li></Link>)}
      </ul>
    </Layout>
  )
}

export default Blog

export const query = graphql`
    query BlogPostsPageQuery {
        allContentfulBlogPost(limit: 1000) {
            totalCount
            edges {
                node {
                    id
                    title
                    slug
                }
            }
        }
    }
`;
