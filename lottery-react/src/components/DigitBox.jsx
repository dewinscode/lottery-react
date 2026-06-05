export default function DigitBox({ digit, won, isRolling }) {
  let statusClass = "";
  if (isRolling) {
    statusClass = "rolling-anim";
  } else if (digit !== null) {
    statusClass = won ? "win" : "lose";
  }

  return (
    <div className={`digit-box ${statusClass}`}>
      {digit !== null ? digit : "–"}
    </div>
  );
}