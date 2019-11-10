import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Sensane pomoże Ci znaleźć psychologa</h1>
    <p>Jakies value proposition</p>
      <div>
          <ul>
              <li><Link to="/lista-psychologow/">Lista psychologów</Link></li>
              <li><Link to="/blog/">Blog</Link></li>
          </ul>
      </div>
  </Layout>
)

export default IndexPage
