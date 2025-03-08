import React, { useEffect, useState } from 'react';

function App() {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/trades')
      .then(response => response.json())
      .then(data => setTrades(data));
  }, []);

  return (
    <div className="App">
      <h1>Trading Dashboard</h1>
      <ul>
        {trades.map((trade, index) => (
          <li key={index}>{trade.symbol}: {trade.price} ({trade.action})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
