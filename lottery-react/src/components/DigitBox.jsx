export default function DigitBox({ digit, won }) {
  const style = {
    width: "72px",
    height: "88px",
    border: won ? "1.5px solid #97C459" : "1px solid #ddd",
    borderRadius: "12px",
    background: won ? "#EAF3DE" : "#f9f9f7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "42px",
    fontWeight: "500",
    color: won ? "#27500A" : "#222",
    transition: "all 0.3s",
  };

  return <div style={style}>{digit !== null ? digit : "–"}</div>;
}