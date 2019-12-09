require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Frankie McMillan',
    description: 'Delve into the world of Frankie McMillan, author & poet.',
    author: '@nikwillok',
    twitterUsername: '@frankie_mcmillan',
    image: '/frankie_backyard.jpg',
    siteUrl: 'https://nervous-bose-ae5d51.netlify.com',
  },

  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
};
