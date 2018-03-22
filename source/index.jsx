import React    from 'react';
import ReactDOM from 'react-dom';

export default function Article(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>by {props.by}</p>
      <a href={props.url}>{props.url}</a>
    </div>
  )
}


ReactDOM.render((
  <Article
    by="Hoolio"
    title="Some Cool Techy Stuff"
    url="https://google.com"
  />
), document.getElementById('App'));
