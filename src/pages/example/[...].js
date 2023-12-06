import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import NetlifyComponent from "../../components/netlify-component"

const App = () => {
    return (
      <Layout>
        <Router basepath="/example">
          <NetlifyComponent path="/netlify-component" component={NetlifyComponent} />
        </Router>
      </Layout>
    )
  }
  
  export default App