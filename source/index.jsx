import React    from 'react';
import ReactDom from 'react-dom';

//Import an instance of the custom components made in other files
import SpicyHot from './Components/SpicyHot';
import Article  from './Components/Article';

ReactDom.render(<SpicyHot />, document.getElementById('SpicySection'));

//When rendering multiple instances of the same IMPORTED component,
//it seems to be easiest to define the properties here i.e. where they are imported.
//Is there an alternative to this?
const someArticles =
<div>
  <Article 
    title="Article 1"
    by="Author 1"
    url="https://www.google.com/"
  />
  <Article
    title="Article 2"
    by="Author 2"
    url="https://www.youtube.com/"
  />
  <Article
    title="Article 3"
    by="Author 3"
    url="https://www.facebook.com/"
  />
</div>

ReactDom.render(
  someArticles, 
  document.getElementById('ArticleSection'));