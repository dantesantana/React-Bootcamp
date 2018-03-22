import React from 'react';

import styles from './styles.css';

export default function Filter({ onChange, value }) {
  return (
    <input
      className={styles.filter}
      onChange={onChange}
      placeholder="Search"
      value={value}
    />
  );
}
