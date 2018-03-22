import React from 'react';
import styles from './styles.css';

export default function Empty () {
  return (
    <div className={styles.empty}>
      No articles match you search.
    </div>
  )
}
