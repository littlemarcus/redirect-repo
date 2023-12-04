/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  }),
    createPage({
      path: "/search",
      matchPath: "/search/*",
      component: require.resolve("./src/components/search.js"),
    })    
  createRedirect({
    fromPath: `/foo-Bar`,
    toPath: `/page-2`,
    ignoreCase: true,
    isPermanent: true,
  })
}
