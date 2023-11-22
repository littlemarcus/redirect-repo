import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondSSR = () => (
  <main>
    <h1>SSR Page with Dogs</h1>
  </main>
)

export const Head = () => <Seo title="Second SSR" />

export default SecondSSR

export async function getServerData() {
    return {
        status: 404,
        headers: {},
        props: {}
    }
}
