module.exports = {
  siteMetadata: {
    title: `Starter Landing Page PaperCSS`,
    description: `A barebone landing page starter with PaperCSS.`,
    author: `@gillkyle, @stefanseegerer`,
    siteUrl: `https://www.stefanseegerer.de/gatsby-starter-paper-css-landing-page`,
  },
  pathPrefix: "/gatsby-starter-paper-css-landing-page",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/components/layout.js`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
