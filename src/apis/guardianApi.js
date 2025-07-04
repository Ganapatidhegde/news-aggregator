// src/api/guardianApi.js
import axios from 'axios';

const GUARDIAN_API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;
const BASE_URL = 'https://content.guardianapis.com/search';

export const fetchGuardianArticles = async (keyword = '', category = '', date = '') => {
  const params = {
    'api-key': GUARDIAN_API_KEY,
    'show-fields': 'thumbnail,trailText',
    'q': keyword || '',
    'section': category || undefined,
    'from-date': date || undefined,
    'order-by': 'newest',
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data.response.results.map(article => ({
    title: article.webTitle,
    description: article.fields?.trailText,
    url: article.webUrl,
    urlToImage: article.fields?.thumbnail,
    publishedAt: article.webPublicationDate,
    source: { name: 'The Guardian' },
  }));
};
