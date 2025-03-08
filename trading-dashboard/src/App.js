import React, { useEffect, useState } from 'react';

import NewsList from './components/NewsList';

function App() {
  const [trades, setTrades] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/trades')
      .then(response => response.json())
      .then(data => setTrades(data));
  }, []);

  // Fetch news data
  useEffect(() => {
    fetch('http://127.0.0.1:5000/news')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched news:', data); // Check the fetched data
        setNews(data);
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="App">
      <h1>Trading Dashboard</h1>
      <ul>
        {trades.map((trade, index) => (
          <li key={index}>{trade.symbol}: {trade.price} ({trade.action})</li>
        ))}
      </ul>
      <NewsList news={news} />
    </div>
  );
}

export default App;
