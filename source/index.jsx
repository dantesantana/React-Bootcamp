import React    from 'react';
import ReactDOM from 'react-dom';

var count = 0;

function clickHandler(){
	count++; //count number of times the button is clicked
	alert('Thanks! ' + count); //output message and click counter
}

ReactDOM.render(
	(
		//this could be written in a separate function, 
		//but has been entered into the renderer here to save space
		//(as it is only used once)
		<button onClick={clickHandler}>Click Me!</button>
	), 
	document.getElementById('app')
);