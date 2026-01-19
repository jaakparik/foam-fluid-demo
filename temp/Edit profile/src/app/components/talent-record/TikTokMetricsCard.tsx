import TikTok from "@/imports/TikTok";
import TikTokDark from "@/imports/TikTokDark";

interface TikTokMetricsCardProps {
  isDark?: boolean;
  handle: string;
  followers: string;
  iconOnly?: boolean;
}

export function TikTokMetricsCard({
  isDark = false,
  handle,
  followers,
  iconOnly = false,
}: TikTokMetricsCardProps) {
  if (iconOnly) {
    return (
      <div
        title={handle}
        style={{
          width: "20px",
          height: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {isDark ? <TikTokDark /> : <TikTok />}
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "var(--filter-card-bg)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "12px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div
        title={handle}
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <div style={{ width: "32px", height: "32px" }}>
          {isDark ? <TikTokDark /> : <TikTok />}
        </div>
      </div>
      <div
        className="numbers"
        style={{
          color: "var(--filter-card-text)",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        {followers}
      </div>
    </div>
  );
}