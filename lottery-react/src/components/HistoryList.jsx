export default function HistoryList({ history }) {
  return (
    <div style={styles.wrapper}>
      <p style={styles.heading}>🕒 Recent Tickets</p>
      {history.map((h, i) => (
        <div key={i} style={styles.row}>
          <span>{h.digits.join(" · ")}</span>
          <span>sum = {h.sum}</span>
          <span style={{ color: h.won ? "#3B6D11" : "#aaa", fontWeight: "500" }}>
            {h.won ? "Win 🏆" : "No win"}
          </span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  wrapper: { marginTop: "1.5rem", textAlign: "left" },
  heading: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#888",
    margin: "0 0 8px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    color: "#555",
    padding: "5px 0",
    borderBottom: "1px solid #eee",
  },
};