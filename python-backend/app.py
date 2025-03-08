from flask import Flask, jsonify
from flask_cors import CORS

import os
import requests

API_KEY = os.getenv('API_KEY')

app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {"origins": ["http://localhost:3000", "http://192.168.1.106:3000"]},
    r"/news": {"origins": ["http://localhost:3000", "http://192.168.1.106:3000"]}
})


@app.route('/api/trades', methods=['GET'])
def get_trades():
    # Dummy trade data
    trades = [
        {"symbol": "AAPL", "price": 150, "action": "Buy"},
        {"symbol": "TSLA", "price": 700, "action": "Sell"}
    ]
    return jsonify(trades)

@app.route('/news', methods=['GET'])
def get_news():
    url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey={API_KEY}'
    try:
        r = requests.get(url)
        r.raise_for_status()  
        print(r.text)

        data = r.json()

        # Check if 'feed' exists in the response
        if 'feed' in data:
            return jsonify(data)
        else:
            return jsonify({"error": "No feed data found in the response"}), 500

    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Error fetching news: {e}"}), 500


if __name__ == '__main__':
    app.run(debug=True)