import React       from 'react';
import ReactDOM    from 'react-dom';
import GetArticles from 'hacker-news-top-list';

import NewsFeed from './Views/NewsFeed';

//why can't I define Loading and Failure in the same file?
//one "default" function per .jsx
import Loading from './Components/Loading';
import Failure from './Components/Failure';

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
    urk: 'https://google.com',
  },
  {
    by: 'Hoolio H',
    id: 3,
    title: 'Yeh Cool Keen',
    url: 'https://google.com',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], request: 'LOADING' };
  }

  componentWillMount() {
  	//this line originally reads "GetArticles().them..."
  	//should probably tell Tanda to fix that in the repo
  	//(https://github.com/leonp1991/hacker-news-top-list)
  	//this code is given to us as it is not react specific
    GetArticles().then((articles) => {
      this.setState({ articles, request: 'SUCCESS' })
      //this works but is not used as the two properties can be changed in one line
      //this.setState({ request: 'SUCCESS' })

    //if GetArticles() throws an error, display the failure message
    }).catch(()=>{this.setState({request: 'FAILURE'})});
  }

  render() {
  	/*
    return (
      <NewsFeed
        articles={this.state.articles}
      />
    )
    */
    switch(this.state.request){
    	case 'SUCCESS':
    		return <NewsFeed articles={this.state.articles}/>;
		case 'FAILURE':
			return <Failure />;
		case 'LOADING':
			return <Loading />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
