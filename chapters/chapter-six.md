# API Integrations

To improve on our container component from last chapter, we will tackle two aspects, integrating with the api, and providing alternate view states.

# Integrating With The API

To integrate with the api, we will be using a package named `hacker-news-top-list`. The README.md of this module can be found [here](https://yarnpkg.com/en/package/hacker-news-top-list). Lets add the dependency using `yarn add hacker-news-top-list`. We can now use this in our container's `componentWillMount` method and add the results to state with `setState`.

Lets refactor our container to make the api call.

```jsx
// source/index.jsx
import React from 'react';
import getArticles from 'hacker-news-top-list';

import NewsFeed from './View/NewsFeed';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentWillMount() {
    // since this isnt really react specific we will
    // give you this one 😜
    GetArticles().then(articles => {
      this.setState({ articles })
    });
  }

  render() {
    return (
      <NewsFeed
        articles={this.state.articles}
      />
    );
  }
}

ReactDom.render(<Container />, document.getElementById('root'));
```

There we have it. Our app now renders a list of articles from the API!

# Providing Alternate States

Currently while our data is loading we unfortunately dont see anything, this is not a good time. We also dont have a screen to let the user no if theres a problem requesting the data. Heres a pattern we can employ to solve this:

```jsx
import React from 'react';

class Container extends React.Component {
  constructor() {
    super(props);
    this.state = { request: 'LOADING' };
  }

  render() {
    switch(this.state.request) {
      case 'SUCCESS':
        return <Foo />;
      case 'FAILURE':
        return <Bar />;
      case 'LOADING':
        return <Baz />;
    }
  }
}
```

## Excercise

Lets use this pattern to provide a more robust system and better experience for the user. To do this we will need to:

- Create a `Loading` component
- Create a `Failure` component
- On [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) failure/success update the state of the request in state.
  * `this.state.request` should always equal one of: 'LOADING' | 'SUCCESS' | 'FAILURE'

- Show the correct view depending on `this.state.request`.


**_Additional Excercise_**

- Refactor the loading component into its own component in `source/Component/Loading/index.jsx`
- Refactor the failure component into its own component in `source/Component/Failure/index.jsx`
- Make them look 💸 💸 💸 .
