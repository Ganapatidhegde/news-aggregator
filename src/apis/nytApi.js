// src/api/nytApi.js
import axios from 'axios';

const NYT_API_KEY = process.env.REACT_APP_NYT_API_KEY;
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

export const fetchNYTArticles = async (keyword = '', category = '', date = '') => {
  const params = {
    'q': keyword || '',
    'fq': category ? `section_name:("${category}")` : undefined,
    'begin_date': date ? date.replace(/-/g, '') : undefined, // NYT needs yyyymmdd
    'api-key': NYT_API_KEY,
    'sort': 'newest',
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data.response.docs.map(article => ({
    title: article.headline?.main,
    description: article.abstract,
    url: article.web_url,
    urlToImage: article.multimedia?.[0]
      ? `https://www.nytimes.com/${article.multimedia[0].url}`
      : null,
    publishedAt: article.pub_date,
    source: { name: 'New York Times' },
  }));
};
