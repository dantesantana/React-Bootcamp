import React       from 'react';
import ReactDOM    from 'react-dom';
import GetArticles from 'hacker-news-top-list';

import Loading     from './Components/Loading';
import Failure     from './Components/Failure';
import NewsFeed    from './Views/NewsFeed';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      request: 'LOADING',
    };
  }

  componentWillMount() {
    GetArticles().then((articles) => {
      this.setState({ articles, request: 'SUCCESS' });
    }).catch(() => {
      this.setState({ request: 'FAILURE' });
    });
  }

  render() {
    switch(this.state.request) {
      case 'SUCCESS':
        return (
          <NewsFeed
            articles={this.state.articles}
          />
        );
      case 'LOADING':
        return <Loading />;
      case 'FAILURE':
      default:
        return <Failure />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
