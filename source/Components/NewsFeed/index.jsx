import React from 'react';
import styles from './styles.css';

import Article from '../Article';

//the function below takes a variable "{articles}"; 
//a custom variable which copies the properties from Article for use here
//each article is added to articles (an array) in order to display them!
export default function NewsFeed({articles}) {
  return (
    <div>
      {
        articles.map(
          article => <Article
            by={article.by}
            //our unique identifier is always called key, 
            //is this by convention or as a rule?
            key={article.id}
            title={article.title}
            url={article.url}
          />
        )
      }
    </div>
  )
}
