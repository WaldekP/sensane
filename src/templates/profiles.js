import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Profiles = ({data}) => {
  const profiles = data.allContentfulProfile.edges
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Lista psychologow</h1>

      <p>Tu beda psychologowie z roznuch miast bla bla bla</p>
      <ul>
        {profiles.map(profile => <Link to={`/${profile.node.slug}`}><li>{profile.node.title}</li></Link>)}
      </ul>
      <Link to="/blog/">Idz do bloga</Link>
    </Layout>
  )
}

export default Profiles

export const query = graphql`
    query ProfilesPageQuery {
        allContentfulProfile {
            edges {
                node {
                    title
                    slug
                    coverPhoto {
                        file {
                            url
                        }
                    }
                    tolerance
                }
            }
        }
    }
`;
