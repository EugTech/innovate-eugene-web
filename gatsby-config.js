module.exports = {
  siteMetadata: {
    title: `Innovate Eugene`,
    description: `An interactive database of Eugene's Innovation District`,
    author: `Eugene Tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: 'Json',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'json',
        path: `${__dirname}/src/json/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `innovate-eugene-web`,
        short_name: `Innovate`,
        start_url: `/`,
        background_color: `#57694b`,
        theme_color: `#57694b`,
        display: `minimal-ui`,
        icon: `src/images/eugenetech_favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
