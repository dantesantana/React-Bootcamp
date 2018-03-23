import React from 'react'
import Link from 'gatsby-link'

import qr from './qr.png'
import styles from './styles.css'



export default (props) => {
  const chapters = props.data.allMarkdownRemark.edges.map(e => e.node.frontmatter)

  return (
    <div>
      <h1>Welcome to Tanda's React Bootcamp 👋</h1>
      <p>
        Hope you are keen to jump into learning some react and react-native. During the Bootcamp we will work towards building a small Hackernews news feed in plain react, and then port it over to react-native!
      </p>
      <p>
        Please clone the project from <a href="https://github.com/TandaHQ/react-hackernews-bootcamp-one-v2"> here</a>,
        before jumping into the chapters below. Also make sure you go through the project readme and have everything all set up correctly.
      </p>
      <h2>Chapters</h2>
      <div className="chapter-links">
        {chapters.map(chapter => (
          <Link to={chapter.path}>
            {chapter.index} - {chapter.title}
          </Link>
        ))}
      </div>
      <h1 /> {/* spaces the content :| */}
      <h2>
        Wanna play around with the Hackernews app now?
      </h2>
      <p>
        Download the <a href="https://expo.io/">expo</a> app on your phone and scan this QR code.
      </p>
      <img src={qr}/>
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
