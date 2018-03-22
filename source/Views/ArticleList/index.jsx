import React from 'react';

import Article from '../../Components/Article';
import Empty   from '../../Components/Empty';

export default function ArticleList({ articles }) {
  return articles.length > 0 ? (
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
  ) : (
    <Empty />
  );
}
