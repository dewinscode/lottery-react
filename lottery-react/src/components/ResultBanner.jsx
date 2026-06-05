export default function ResultBanner({ result, sum }) {
  const won = result === "win";
  return (
    <div className={`result-banner ${won ? "win" : "lose"}`}>
      {won
        ? "🏆 You won! The digits sum to 15!"
        : `😔 Not this time. Sum was ${sum}, needed 15.`}
    </div>
  );
}