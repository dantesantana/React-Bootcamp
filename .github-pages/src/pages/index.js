import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.css'

export default (props) => {
  const chapters = props.data.allMarkdownRemark.edges.map(e => e.node.frontmatter)

  return (
    <div>
      <h1>Welcome to Tanda's React Bootcamp 👋</h1>
      <p>
        If you dont like reading markdown, please use this site to read the content of the bootcamp.
      </p>
      <h2>Chapters</h2>
      <div className="chapter-links">
        {chapters.map(chapter => (
          <Link to={chapter.path}>
            {chapter.index} - {chapter.title}
          </Link>
        ))}
      </div>
    </div>
  );
}


export const pageQuery = graphql`
  query AllChapters {
    allMarkdownRemark(
      sort: {
        order: ASC,
        fields: [frontmatter___index]
      }
      limit: 1000
    ) {
    edges {
      node {
        frontmatter {
          index
          path
          title
        }
      }
    }
  }
  }
`;
