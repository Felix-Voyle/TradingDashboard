from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])


@app.route('/api/trades', methods=['GET'])
def get_trades():
    # Dummy trade data
    trades = [
        {"symbol": "AAPL", "price": 150, "action": "Buy"},
        {"symbol": "TSLA", "price": 700, "action": "Sell"}
    ]
    return jsonify(trades)

if __name__ == '__main__':
    app.run(debug=True)