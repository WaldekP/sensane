const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  const blog = path.resolve(`./src/templates/blog.js`)
  const profile = path.resolve(`./src/templates/profile.js`)
  const profiles = path.resolve(`./src/templates/profiles.js`)
  return graphql(
    `
  {
  allContentfulBlogPost {
    edges {
      node {
        title
        slug
        childContentfulBlogPostBodyRichTextNode {
          childContentfulRichText {
            html
          }
        }
      }
    }
  }
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
    `
  ).then(result => {

    if(result.errors) {
      throw result.errors
    }

    const posts = result.data.allContentfulBlogPost.edges
    const profilesList = result.data.allContentfulProfile.edges

    posts.forEach((post, index) => {

      createPage({
        path: `/blog/${post.node.slug}`,
        component: blogPost,
        context: {
          slug: post.node.slug
        }
      })

      createPage({
        path: 'blog',
        component: blog,
        context: {
          slug: post.node.slug
        }
      })

    })

    profilesList.forEach((psychProfile, index) => {
      createPage({
        path: psychProfile.node.slug,
        component: profile,
        context: {
          slug: psychProfile.node.slug
        }
      })
    })

    createPage({
      path: 'lista-psychologow',
      component: profiles,
    })

  })
}
