import { useState } from 'react';
import axios from 'axios';

function App() {
  const [ticker, setTicker] = useState('');
  const [result, setResult] = useState(null);

  const fetchValuation = async () => {
    const res = await axios.get(`http://localhost:8000/api/valuation/${ticker}`);
    setResult(res.data);
  };

  return (
    <div className="p-10 font-sans">
      <h1 className="text-2xl font-bold mb-4">IB Insight Valuation Tool</h1>
      <input
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Enter ticker (e.g. AAPL)"
      />
      <button onClick={fetchValuation} className="bg-blue-600 text-white px-4 py-2 rounded">
        Analyze
      </button>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <p><strong>Ticker:</strong> {result.ticker}</p>
          <p><strong>Price:</strong> ${result.price}</p>
          <p><strong>Market Cap:</strong> ${result.marketCap?.toLocaleString()}</p>
          <p><strong>Revenue:</strong> ${result.revenue?.toLocaleString()}</p>
          <p><strong>EBITDA:</strong> ${result.ebitda?.toLocaleString()}</p>
          <p><strong>P/E Ratio:</strong> {result.peRatio}</p>
          <p><strong>Sector:</strong> {result.sector}</p>
        </div>
      )}
    </div>
  );
}

export default App;
