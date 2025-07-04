import React from 'react';
import './Filter.css';

export const Filters = ({
  keyword,
  setKeyword,
  date,
  setDate,
  category,
  setCategory,
  sources,
  handleSourceChange,
  handleSearch,
}) => {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search keyword..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="politics">Politics</option>
        <option value="health">Health</option>
        <option value="sports">Sports</option>
      </select>

      <label>
        <input type="checkbox" name="newsapi" checked={sources.newsapi} onChange={handleSourceChange} />
        NewsAPI
      </label>
      <label>
        <input type="checkbox" name="guardian" checked={sources.guardian} onChange={handleSourceChange} />
        Guardian
      </label>
      <label>
        <input type="checkbox" name="nyt" checked={sources.nyt} onChange={handleSourceChange} />
        NYT
      </label>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
