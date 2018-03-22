import React   from 'react';

import Article from '../../Components/Article';


export default function NewsFeed({ articles }) {
  return (
    <div>
      {articles.map(article =>
        <Article
          by={article.by}
          key={article.id}
          title={article.title}
          url={article.url}
        />
      )}
    </div>
  );
}
