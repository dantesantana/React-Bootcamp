import React    from 'react';
import ReactDOM from 'react-dom';

import Article from './Components/Article';


ReactDOM.render((
  <Article
    by="Hoolio"
    title="Some Cool Techy Stuff"
    url="https://google.com"
  />
), document.getElementById('App'));
