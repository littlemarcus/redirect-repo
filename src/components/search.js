import * as React from "react"
import Layout from "./layout"
import Seo from "./seo"

const Search = () => (
  <Layout>
    <h1>Testing matchPath on Netlify</h1>
  </Layout>
)

export const Head = () => <Seo title="matchPath Test" />

export default Search