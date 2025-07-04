import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchEverything } from './apis/newsApi';
import { fetchGuardianArticles } from './apis/guardianApi';
import { fetchNYTArticles } from './apis/nytApi';
import { Filters } from './components/Filters/Filter';
import { NewsGrid } from './components/NewsGrid/NewsGrid';
import { Loader } from './components/Loader/Loader';
import { NoResults } from './components/NoRsults/NoResults';


function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [sources, setSources] = useState({
    newsapi: true,
    guardian: true,
    nyt: true,
  });

  const handleSearch = () => {
    setLoading(true);
    const promises = [];

    if (sources.newsapi) promises.push(fetchEverything(keyword, category, date));
    if (sources.guardian) promises.push(fetchGuardianArticles(keyword, category, date));
    if (sources.nyt) promises.push(fetchNYTArticles(keyword, category, date));

    Promise.allSettled(promises)
      .then((results) => {
        const fulfilled = results
          .filter((r) => r.status === 'fulfilled')
          .map((r) => r.value)
          .flat();

        setArticles(fulfilled);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSourceChange = (e) => {
    const { name, checked } = e.target;
    setSources((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="App">
      <div className="app-title">News Aggregator</div>

      <Filters
        keyword={keyword}
        setKeyword={setKeyword}
        date={date}
        setDate={setDate}
        category={category}
        setCategory={setCategory}
        sources={sources}
        handleSourceChange={handleSourceChange}
        handleSearch={handleSearch}
      />

     {loading && <Loader text="Fetching the latest news..." />}
      {!loading && articles.length === 0 && <NoResults />}
      {!loading && articles.length > 0 && <NewsGrid articles={articles} />}
    </div>
  );
}

export default App;
