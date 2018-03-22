import React       from 'react';

import ArticleList from '../ArticleList';
import Empty       from '../../Components/Empty';
import Loading     from '../../Components/Loading';
import Failure     from '../../Components/Failure';


export default function NewsFeed({ articles, request }) {
  switch(request) {
    case 'SUCCESS':
      return <ArticleList articles={articles} />
    case 'LOADING':
      return <Loading />;
    case 'FAILURE':
    default:
      return <Failure />;
  }
}
