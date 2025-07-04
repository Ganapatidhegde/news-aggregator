import React from 'react';
import './Loader.css';

export const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
};
