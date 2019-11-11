import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProfileImg = styled.div`
  max-width: 200px;
  height: auto;
`
const Tag = styled.div`
    margin-right: 5px;
    background-color: #858AE3;
    color: #4E148C;
    padding: 5px;
    border-radius: 5px;
`

const Tags = styled.div`
  display: flex;
`

const Profile = ({data}) => {

  const profile = data.contentfulProfile
  const profileDescription = data.contentfulProfileBioRichTextNode

  return (
    <Layout>
      <SEO title="Home" />
      <ProfileImg>
        <Img fluid={profile.coverPhoto.fluid}/>
      </ProfileImg>
      <h1>{profile.title}</h1>
      <Tags>
        {profile.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
      </Tags>
      <ul>
        {profileDescription.json.content.map(item => <p>{item.content[0].value}</p>)}
      </ul>
      <Link to="/lista-psychologow/">Wróć do listy</Link>
    </Layout>
  )
}

export default Profile

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulProfile(slug: {eq: $slug}) {
            title
            slug
            tags
            coverPhoto {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
        }
        contentfulProfileBioRichTextNode {
            json
            childContentfulRichText {
                html
            }
        }
    }
`;
