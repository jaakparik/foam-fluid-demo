export function RecentActivitySection() {
  return (
    <div
      style={{
        backgroundColor: "var(--filter-card-bg)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "12px",
        padding: "24px",
        marginBottom: "24px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          color: "var(--table-text-primary)",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Recent Activity
      </h3>
    </div>
  );
}
