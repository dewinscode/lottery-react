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
  const [isRolling, setIsRolling] = useState(false);

  const generateTicket = () => {
    if (isRolling) return;
    setIsRolling(true);
    setResult(null); // Clear result banner on new roll

    let ticks = 0;
    const interval = setInterval(() => {
      setDigits([
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ]);
      ticks++;

      if (ticks >= 16) {
        clearInterval(interval);

        const finalDigits = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
        ];
        const finalSum = finalDigits.reduce((a, b) => a + b, 0);
        const won = finalSum === 15;

        setDigits(finalDigits);
        setSum(finalSum);
        setResult(won ? "win" : "lose");
        setTotal((prev) => prev + 1);
        if (won) setWins((prev) => prev + 1);
        setHistory((prev) =>
          [{ digits: finalDigits, sum: finalSum, won }, ...prev].slice(0, 5)
        );
        setIsRolling(false);
      }
    }, 50);
  };

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">🎰 Lucky 15</h2>
        <p className="subtitle">
          Win if your 3 digits sum to exactly <strong>15</strong>
        </p>

        <div className="digit-row">
          {digits.map((d, i) => (
            <DigitBox key={i} digit={d} won={result === "win"} isRolling={isRolling} />
          ))}
        </div>

        {sum !== null && !isRolling && (
          <p className="sum-text">
            {digits.join(" + ")} = <strong>{sum}</strong>
          </p>
        )}

        <button 
          className={`gen-btn ${isRolling ? "rolling" : ""}`} 
          onClick={generateTicket}
          disabled={isRolling}
        >
          {isRolling ? "⚡ Shuffling..." : "🎟️ Generate Ticket"}
        </button>

        {result && !isRolling && <ResultBanner result={result} sum={sum} />}

        <div className="stats-row">
          <StatsCard label="Total Played" value={total} />
          <StatsCard label="Wins" value={wins} color="#10b981" />
        </div>

        {history.length > 0 && <HistoryList history={history} />}
      </div>
    </div>
  );
}