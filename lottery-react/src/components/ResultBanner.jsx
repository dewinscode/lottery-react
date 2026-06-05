export default function ResultBanner({ result, sum }) {
  const won = result === "win";
  return (
    <div className={`result-banner ${won ? "win" : "lose"}`}>
      {won ? (
        <span>
          🎉 <strong>JACKPOT WINNER!</strong> Sum is exactly 15! 🏆
        </span>
      ) : (
        <span>
          💫 Not quite! Sum was <strong>{sum}</strong> (needed 15). Try again!
        </span>
      )}
    </div>
  );
}