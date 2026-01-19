import { TrendingUp } from "lucide-react";
import { PerformanceChartsSection } from "./PerformanceChartsSection";

interface Talent {
  instagramEngagementRate: string;
}

interface PerformanceSectionProps {
  talent: Talent;
  isDark?: boolean;
}

export function PerformanceSection({
  talent,
  isDark = false,
}: PerformanceSectionProps) {
  return (
    <div>
      {/* Performance Charts */}
      <PerformanceChartsSection />

      {/* Engagement Rate */}
      <div
        style={{
          backgroundColor: "var(--filter-card-bg)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "24px",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp
            size={16}
            style={{ color: "var(--filter-card-icon)" }}
          />
          <span
            className="filter-card-label"
            style={{ color: "var(--filter-card-text)" }}
          >
            Instagram Engagement Rate
          </span>
        </div>
        <span
          className="filter-card-count"
          style={{
            color: "var(--filter-card-text)",
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          {talent.instagramEngagementRate}
        </span>
      </div>
    </div>
  );
}