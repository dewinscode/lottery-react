export default function HistoryList({ history }) {
  return (
    <div className="history-wrapper">
      <p className="history-heading">🕒 Recent Draws</p>
      {history.map((h, i) => (
        <div key={i} className="history-row">
          <span>{h.digits.join(" · ")}</span>
          <span>sum = {h.sum}</span>
          <span className={h.won ? "win-tag" : "lose-tag"}>
            {h.won ? "Win 🏆" : "No Win ⊘"}
          </span>
        </div>
      ))}
    </div>
  );
}