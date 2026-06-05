export default function DigitBox({ digit, won }) {
  return (
    <div className={`digit-box ${won ? "win" : ""}`}>
      {digit !== null ? digit : "–"}
    </div>
  );
}