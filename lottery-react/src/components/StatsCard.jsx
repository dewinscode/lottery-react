export default function StatsCard({ label, value, color = "#222" }) {
  return (
    <div style={styles.card}>
      <p style={styles.label}>{label}</p>
      <p style={{ ...styles.value, color }}>{value}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#f9f9f7",
    borderRadius: "8px",
    padding: "12px 14px",
    textAlign: "center",
  },
  label: { fontSize: "12px", color: "#888", margin: "0 0 4px" },
  value: { fontSize: "22px", fontWeight: "500", margin: "0" },
};