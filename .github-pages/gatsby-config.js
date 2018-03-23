module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [{
    resolve: 'gatsby-plugin-react-helmet',
  }, {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/../chapters`,
      name: "markdown-pages",
    },
  }, {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [{
        resolve: `gatsby-remark-prismjs`,
      }],
    },
  }],
};
