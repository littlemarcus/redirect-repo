import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NetlifyComponent = () => (
  <Layout>
    <h1>Testing CSR on Netlify</h1>
  </Layout>
)

export const Head = () => <Seo title="Netlify Component" />

export default NetlifyComponent