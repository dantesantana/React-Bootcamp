import React    from 'react';
import ReactDOM from 'react-dom';

import Article from './Components/Article';
import NewsFeed from './Components/NewsFeed';

// our fake articles from hackernews
//note that in this example we don't give any formatting details as they
//will be handled by the view we use!
const ARTICLES = [
  {
    by: 'Annie A',
    id: 1,
    title: 'Some Cool Techy Stuff',
    url: 'https://google.com',
  },
  {
    by: 'Diddy P',
    id: 2,
    title: 'Digital Rap',
    url: 'https://google.com',
  },
  {
    by: 'Hoolio H',
    id: 3,
    title: 'Yeh Cool Keen',
    url: 'https://google.com',
  },
];


ReactDOM.render((
	<NewsFeed
		articles={ARTICLES}
  />
), document.getElementById('App'));
