import React       from 'react';
import ReactDOM    from 'react-dom';
import GetArticles from 'hacker-news-top-list';

import Filter      from './Views/Filter';
import NewsFeed    from './Views/NewsFeed';

import styles from './styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      request: 'LOADING',
      filter: '',
    };
  }

  componentWillMount() {
    GetArticles().then((articles) => {
      this.setState({ articles, request: 'SUCCESS' });
    }).catch(() => {
      this.setState({ request: 'FAILURE' });
    });
  }

  handleFilterChange(event) {
    this.setState({ filter: event.target.value })
  }

  render() {
    return (
      <div className={styles.app}>
        <Filter
          onChange={this.handleFilterChange}
          value={this.state.filter}
        />
        <NewsFeed
          articles={this.state.articles}
          request={this.state.request}
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('App'));
