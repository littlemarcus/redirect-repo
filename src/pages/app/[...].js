import React from "react"
import { Router } from "@reach/router"
import NetlifyComponent from "../../components/netlify-component"

const App = () => {
    return (
      <Layout>
        <Router basepath="/app">
          <NetlifyComponent path="/netlify-component" component={NetlifyComponent} />
          <Default path="/" />
        </Router>
      </Layout>
    )
  }
  
  export default App