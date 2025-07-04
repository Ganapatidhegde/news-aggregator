import React from 'react';
import './NewsCard.css';

export const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="news-image" />
      )}
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more →
      </a>
    </div>
  );
};
