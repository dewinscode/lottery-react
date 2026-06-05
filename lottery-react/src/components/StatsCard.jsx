export default function StatsCard({ id, label, value, color }) {
  return (
    <div className="stats-card" id={id}>
      <p className="stats-label">{label}</p>
      <p className="stats-value" style={{ color: color || "#ffffff" }}>{value}</p>
    </div>
  );
}