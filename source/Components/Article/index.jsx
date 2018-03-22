import React from 'react';
import styles from './styles.css';

export default function Article(props) {
  return (
    <div className={styles.article}>
      <h3 className={styles.title}>
        {props.title}
      </h3>
      <p className={styles.by}>
        by {props.by}
      </p>
      <div>
        <a className={styles.url} href={props.url}>
          {props.url}
        </a>
      </div>
    </div>
  )
}
