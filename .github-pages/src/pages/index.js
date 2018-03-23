import React from 'react'
import Link from 'gatsby-link'
import styles from './styles.css'

export default (props) => {
  console.log(props);
  return (
    <div>
      <h1>Welcome to Tanda's React Bootcamp 👋</h1>
      <p>
        If you dont like reading markdown, please use this site to read the content of the bootcamp.
      </p>
      <h2>Chapters</h2>
      <div className="chapter-links">
        {props.data.allMarkdownRemark.edges.map(edge => (
          <Link
            to={edge.node.frontmatter.path}
          >
            {edge.node.frontmatter.title}
          </Link>
        ))}
      </div>
    </div>
  );
}


export const pageQuery = graphql`
  query AllChapters {
    allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
        }
      }
    }
  }
  }
`;
