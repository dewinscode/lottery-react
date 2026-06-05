import { useState } from "react";
import DigitBox from "./components/DigitBox";
import ResultBanner from "./components/ResultBanner";
import StatsCard from "./components/StatsCard";
import HistoryList from "./components/HistoryList";
import "./App.css";

export default function App() {
  const [digits, setDigits] = useState([null, null, null]);
  const [result, setResult] = useState(null);
  const [sum, setSum] = useState(null);
  const [total, setTotal] = useState(0);
  const [wins, setWins] = useState(0);
  const [history, setHistory] = useState([]);

  const generateTicket = () => {
    const newDigits = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    const newSum = newDigits.reduce((a, b) => a + b, 0);
    const won = newSum === 15;

    setDigits(newDigits);
    setSum(newSum);
    setResult(won ? "win" : "lose");
    setTotal((prev) => prev + 1);
    if (won) setWins((prev) => prev + 1);
    setHistory((prev) =>
      [{ digits: newDigits, sum: newSum, won }, ...prev].slice(0, 5)
    );
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">🎰 Lottery Game</h2>
        <p className="subtitle">
          Win if your 3 digits sum to <strong>15</strong>
        </p>

        <div className="digit-row">
          {digits.map((d, i) => (
            <DigitBox key={i} digit={d} won={result === "win"} />
          ))}
        </div>

        {sum !== null && (
          <p className="sum-text">
            {digits.join(" + ")} = <strong>{sum}</strong>
          </p>
        )}

        <button className="gen-btn" onClick={generateTicket}>
          🎟️ Generate Ticket
        </button>

        {result && <ResultBanner result={result} sum={sum} />}

        <div className="stats-row">
          <StatsCard label="Total Played" value={total} />
          <StatsCard label="Wins" value={wins} color="#3B6D11" />
        </div>

        {history.length > 0 && <HistoryList history={history} />}
      </div>
    </div>
  );
}