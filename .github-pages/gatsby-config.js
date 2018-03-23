module.exports = {
  siteMetadata: {
    title: 'Tanda React Bootcamp',
  },
  plugins: [{
    resolve: 'gatsby-plugin-react-helmet',
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/../chapters`,
      name: 'markdown-pages',
    },
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/../images`,
      name: 'markdown-pages',
    },
  }, {
    resolve: 'gatsby-plugin-sharp',
  }, {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [{
        resolve: 'gatsby-remark-images',
      }, {
        resolve: 'gatsby-remark-copy-linked-files',
      }, {
        resolve: 'gatsby-remark-prismjs',
      }],
    },
  }],
};
