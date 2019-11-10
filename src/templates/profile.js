import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Profile = ({data}) => {

  const postTitle = data.contentfulProfile.title

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{postTitle}</h1>
      <Link to="/blog/">Idz do bloga</Link>
    </Layout>
  )
}

export default Profile

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulProfile(slug: {eq: $slug}) {
            title
            slug
        }
    }
`;
