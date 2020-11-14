require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`
  },
  plugins: [
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the ofisas`,
        short_name: `theofisas`,
        start_url: `/`,
        lang: 'fr',
        display: `standalone`,
        icon: `static/favicon/favicon-32x32.png`
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN
      }
    }
  ]
}
