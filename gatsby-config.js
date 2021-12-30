/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [],
  siteMetadata:{
    title:"Fashion Blog",
    description:"Designer make cloth, people make fashion",
    keywords:"fashion, model, fashion designer, styling, cloth",
    image:"/static/designthinking.png",
    url:"http://bonncommunity.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-wordpress`,
      options:{
        url:`http://bonncommunity.com/blog/graphql`,
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fashion Blog`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.ico`
      },
    },
    `gatsby-plugin-offline`
  ]
}