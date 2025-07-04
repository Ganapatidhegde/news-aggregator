// src/api/newsApi.js
import axios from 'axios';

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchEverything = async (keyword = '', category = '', date = '') => {
const params = {
    q: keyword || 'news',
    from: date || undefined,
    sortBy: 'publishedAt',
    apiKey: NEWS_API_KEY,
    language: 'en',
};

  // Note: NewsAPI doesn't support category filter in 'everything' endpoint
  const response = await axios.get(BASE_URL, { params });

  return response.data.articles.map(article => ({
    title: article.title,
    description: article.description,
    url: article.url,
    urlToImage: article.urlToImage,
    publishedAt: article.publishedAt,
    source: { name: article.source.name },
  }));
};
