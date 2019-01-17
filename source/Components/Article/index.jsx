import React    from 'react';
import ReactDom from 'react-dom';

import styles from './styles.css';

export default function Article(props) {
	return (
		<div className={styles.article}>
			{props.title} by {props.by} can be found at <a href={props.url}>{props.url}</a>.
		</div>
	);
}