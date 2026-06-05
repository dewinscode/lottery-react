import { useState } from "react";
import DigitBox from "./components/DigitBox";
import ResultBanner from "./components/ResultBanner";
import StatsCard from "./components/StatsCard";
import HistoryList from "./components/HistoryList";

export default function App() {
  const [digits, setDigits] = useState([null, null, null]);
  const [result, setResult] = useState(null); // null | "win" | "lose"
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
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🎰 Lottery Game</h2>
        <p style={styles.subtitle}>
          Win if your 3 digits sum to <strong>15</strong>
        </p>

        <div style={styles.digitRow}>
          {digits.map((d, i) => (
            <DigitBox key={i} digit={d} won={result === "win"} />
          ))}
        </div>

        {sum !== null && (
          <p style={styles.sumText}>
            {digits.join(" + ")} = <strong>{sum}</strong>
          </p>
        )}

        <button style={styles.btn} onClick={generateTicket}>
          🎟️ Generate Ticket
        </button>

        {result && <ResultBanner result={result} sum={sum} />}

        <div style={styles.statsRow}>
          <StatsCard label="Total Played" value={total} />
          <StatsCard label="Wins" value={wins} color="#3B6D11" />
        </div>

        {history.length > 0 && <HistoryList history={history} />}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f0",
    fontFamily: "sans-serif",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "2rem",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  title: { fontSize: "24px", fontWeight: "600", margin: "0 0 4px" },
  subtitle: { fontSize: "14px", color: "#666", margin: "0 0 1.5rem" },
  digitRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  sumText: { fontSize: "15px", color: "#444", margin: "0 0 1.25rem" },
  btn: {
    padding: "10px 28px",
    fontSize: "15px",
    fontWeight: "500",
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "transparent",
    cursor: "pointer",
    marginBottom: "1.25rem",
    transition: "background 0.15s",
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "1.25rem",
  },
};