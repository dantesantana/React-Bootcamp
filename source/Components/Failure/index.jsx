import React from 'react';
import styles from './styles.css';

export default function Loading () {
  return (
    <div className={styles.failure}>
      Failed to load the articles...
    </div>
  )
}
