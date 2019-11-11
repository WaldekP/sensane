import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = styled.div`
  display: flex;
`
const PostImg = styled.div`
  flex: 25%;
  margin-right: 1rem;
`

const PostText = styled.div`
  flex:75%;
`
const Tags = styled.div`
  display: flex;
`

const Tag = styled.div`
    margin-right: 5px;
    background-color: #858AE3;
    color: #4E148C;
    padding: 5px;
    border-radius: 5px;
`

const ProfilesTemplate = () => {

  const data = useStaticQuery( graphql`
      query ProfilesPageQuery {
          allContentfulProfile(sort: { order: DESC, fields: slug}) {
              edges {
                  node {
                      title
                      slug
                      tags
                      shortDescription
                      coverPhoto {
                          fluid {
                              ...GatsbyContentfulFluid
                          }
                      }
                      tolerance
                  }
              }
          }
      }
  `)
  const profiles = data.allContentfulProfile.edges
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Lista psychologow</h1>

      <p>Tu beda psychologowie z roznuch miast bla bla bla</p>
      <ul>
        {profiles.map(profile => {
          return (
            <Link to={`/${profile.node.slug}`} style={{
              textDecoration: "none"
            }}>
            <Post>
              <PostImg>
                <Img fluid={profile.node.coverPhoto.fluid}/>
              </PostImg>
              <PostText>
                <h3>{profile.node.title}</h3>
                <Tags>
                  {profile.node.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
                </Tags>
                <p>{profile.node.shortDescription}</p>
              </PostText>
            </Post>
            </Link>
          )
        })}
      </ul>
      <Link to="/blog/">Idz do bloga</Link>
    </Layout>
  )
}

export default ProfilesTemplate
