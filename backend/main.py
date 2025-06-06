from fastapi import FastAPI
import yfinance as yf

app = FastAPI()

@app.get("/api/valuation/{ticker}")
def get_valuation(ticker: str):
    stock = yf.Ticker(ticker)
    info = stock.info
    return {
        "ticker": ticker.upper(),
        "price": info.get("currentPrice"),
        "marketCap": info.get("marketCap"),
        "revenue": info.get("totalRevenue"),
        "ebitda": info.get("ebitda"),
        "peRatio": info.get("trailingPE"),
        "sector": info.get("sector")
    }
