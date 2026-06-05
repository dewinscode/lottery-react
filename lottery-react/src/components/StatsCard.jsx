export default function StatsCard({ label, value, color }) {
  return (
    <div className="stats-card">
      <p className="stats-label">{label}</p>
      <p className="stats-value" style={{ color: color || "#ffffff" }}>{value}</p>
    </div>
  );
}