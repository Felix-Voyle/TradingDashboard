import React from 'react';
import NewsCard from './NewsCard';

import styles from '../css/NewsList.module.css';

function NewsList({ news }) {
  return (
    <div className={styles.newsContainer}>
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsList;