import React from 'react';
import './NoResults.css';

export const NoResults = ({ message = "No articles found for the selected filters." }) => {
  return (
    <div className="no-results-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
        alt="No Results"
        className="no-results-image"
      />
      <p className="no-results-text">{message}</p>
    </div>
  );
};
