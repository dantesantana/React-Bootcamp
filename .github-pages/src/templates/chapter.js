import React from "react";

export default function Template({ data }) {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <div className="chapter-post-container">
      <div className="chapter-post">
        <div
          className="chapter-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ChapterByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
