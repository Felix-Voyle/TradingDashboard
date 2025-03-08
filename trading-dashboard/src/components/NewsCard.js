import React from 'react';
import styles from '../css/NewsCard.module.css';

function NewsCard({ article }) {
  return (
    <div className={styles.newsCard}> 
      <img className={styles.newsBanner} src={article.banner_image} alt={article.title} />
      <div className={styles.newsContent}>
        <h3>{article.title}</h3>
        <p><strong>Sentiment:</strong> {article.overall_sentiment_label}</p>
        <p>{article.summary}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
}

export default NewsCard;