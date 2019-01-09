import React 	from 'react';
import ReactDOM from 'react-dom';

const myReactElement = React.createElement(
	'button',		// this element we want to create
	{
		onClick: function handleClick(){
			alert('Thanks!')
		}
	},				// the properties we want to add to the element
	'Click Me!'		// a child element
);

ReactDOM.render(
	myReactElement,					// what react element we want to render
	document.getElementById('app')	// where we want to render on the page
);