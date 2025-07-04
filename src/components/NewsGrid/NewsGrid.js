import { NewsCard } from '../NewsCard/NewsCard';
import './NewsGrid.css';


export const NewsGrid = ({ articles }) => {
  return (
    <div className="news-grid">
      {articles.map((article, idx) => (
        <NewsCard key={idx} article={article} />
      ))}
    </div>
  );
};
