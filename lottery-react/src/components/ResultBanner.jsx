export default function ResultBanner({ result, sum }) {
  const won = result === "win";
  const style = {
    padding: "14px 20px",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "500",
    background: won ? "#EAF3DE" : "#f2f2f0",
    color: won ? "#27500A" : "#555",
    border: won ? "1px solid #97C459" : "1px solid #e0e0e0",
    marginBottom: "0.5rem",
  };

  return (
    <div style={style}>
      {won
        ? "🏆 You won! The digits sum to 15!"
        : `😔 Not this time. Sum was ${sum}, needed 15.`}
    </div>
  );
}