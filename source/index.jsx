import React    from 'react';
import ReactDOM from 'react-dom';

var count = 0;

function clickHandler(){
	count++;
	alert('Thanks! ' + count);
}

ReactDOM.render(
	(
		<button onClick={clickHandler}>Click Me!</button>
	), 
	document.getElementById('app')
);