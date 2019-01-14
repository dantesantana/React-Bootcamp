import React    from 'react';
import ReactDOM from 'react-dom';

//in jsx, components that start with a lower letter have their name 
//converted into a string (when compiled), thus it is important that your 
//component starts with a capital to retain reference.

//curly brackets "{}" are placed around property names here 
//to make sure they're used correctly, they are not mandatory
//however there can be issues in areas such as hyperlinks
function Article(props){
	return(
		<div>
			{props.title} by {props.by} can be found <a href={props.url}>here</a>.
		</div>
	)
}

//renders three copies of "Article" inside a div!
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

ReactDOM.render(
	someArticles, 
	document.getElementById('Test')
);