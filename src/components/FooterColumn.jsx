import React from 'react';
import styles from '../styles/FooterColumn.module.css';

export default function FooterColumn({ header, words }) {
  return (
    <div className={styles.footerColumn}>
      <h2 className={styles.footerHeader}>{header}</h2>
      <div className={styles.footerLinks}>
        {words.map((word, index) => (
          <p key={index} className={styles.footerWord}>{word}</p>
        ))}
      </div>
    </div>
  );
}