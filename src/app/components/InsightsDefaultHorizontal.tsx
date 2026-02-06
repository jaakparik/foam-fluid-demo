import { TrendingUp } from "./icons/foamicons/TrendingUp";
import { InstagramIcon } from "./icons/InstagramIcon";

interface InsightsDefaultHorizontalProps {
  className?: string;
  resultCount?: number;
  creatorAgeFilter?: boolean;
  followerEngRateFilter?: boolean;
  instagramEngRateFilter?: boolean;
}

function SectionTitle({ icon, children }: { icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[8px]">
      {icon && (
        <div className="size-[16px] flex items-center justify-center" style={{ color: "#8b94a2" }}>
          {icon}
        </div>
      )}
      <p
        className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px] uppercase"
        style={{ color: "#8b94a2" }}
      >
        {children}
      </p>
    </div>
  );
}

function StatRow({ label, value }: { label: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center justify-between py-[4px]">
      <div
        className="flex items-center gap-[4px] font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
        style={{ color: "#54657d" }}
      >
        {label}
      </div>
      <p
        className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
        style={{ color: "#15191e" }}
      >
        {value}
      </p>
    </div>
  );
}

function VerticalBar({ label, count, total }: { label: string; count: number; total: number }) {
  const percentage = (count / total) * 100;
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="flex items-center justify-between">
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "#54657d" }}
        >
          {label}
        </p>
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "#8b94a2" }}
        >
          {count}/{total}
        </p>
      </div>
      <div
        className="h-[4px] w-full rounded-full overflow-hidden"
        style={{ background: "rgba(58, 73, 95, 0.1)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${percentage}%`,
            background: "#7C9EF8",
          }}
        />
      </div>
    </div>
  );
}

function ColumnsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7.5 3v18" />
      <path d="M12 3v18" />
      <path d="M16.5 3v18" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// Get stats based on filter level
function getStatsForFilterLevel(
  creatorAgeFilter: boolean,
  followerEngRateFilter: boolean,
  instagramEngRateFilter: boolean
) {
  // Most filtered: IG eng rate 5% (5 results)
  if (instagramEngRateFilter) {
    return {
      avgEngRate: "6.7%",
      avgAge: "27",
      avgFollowers: "612.8K",
      verticals: [
        { label: "Lifestyle", count: 5, total: 5 },
        { label: "Fashion", count: 4, total: 5 },
        { label: "Travel", count: 3, total: 5 },
      ],
      qualityScore: 94,
      qualityDescription: "Excellent match - highly relevant creators",
      posts: "892",
    };
  }

  // Second most filtered: Follower eng rate 5% (10 results)
  if (followerEngRateFilter) {
    return {
      avgEngRate: "5.9%",
      avgAge: "28",
      avgFollowers: "528.4K",
      verticals: [
        { label: "Lifestyle", count: 8, total: 10 },
        { label: "Fashion", count: 6, total: 10 },
        { label: "Wellness", count: 4, total: 10 },
      ],
      qualityScore: 89,
      qualityDescription: "Great match - strong engagement alignment",
      posts: "1.1K",
    };
  }

  // Third most filtered: Creator age 21-80 (25 results)
  if (creatorAgeFilter) {
    return {
      avgEngRate: "5.3%",
      avgAge: "31",
      avgFollowers: "489.6K",
      verticals: [
        { label: "Lifestyle", count: 18, total: 25 },
        { label: "Beauty", count: 12, total: 25 },
        { label: "Fashion", count: 9, total: 25 },
      ],
      qualityScore: 85,
      qualityDescription: "Good match - age-appropriate creators",
      posts: "1.4K",
    };
  }

  // Default: coffee search (45 results)
  return {
    avgEngRate: "5.7%",
    avgAge: "29",
    avgFollowers: "455.3K",
    verticals: [
      { label: "Lifestyle", count: 3, total: 3 },
      { label: "Beauty", count: 2, total: 3 },
      { label: "Fashion", count: 1, total: 3 },
    ],
    qualityScore: 82,
    qualityDescription: "Results are well-matched to your criteria",
    posts: "1.2K",
  };
}

export function InsightsDefaultHorizontal({
  className = "",
  resultCount = 45,
  creatorAgeFilter = false,
  followerEngRateFilter = false,
  instagramEngRateFilter = false,
}: InsightsDefaultHorizontalProps) {
  const stats = getStatsForFilterLevel(creatorAgeFilter, followerEngRateFilter, instagramEngRateFilter);

  return (
    <div
      className={`flex flex-col rounded-[8px] overflow-hidden ${className}`}
      style={{
        background: "white",
        border: "1px solid rgba(58, 73, 95, 0.1)",
      }}
    >
      {/* Main content */}
      <div className="flex gap-[24px] items-start p-[16px]">
        {/* Averages Section */}
        <div className="flex-1 flex flex-col gap-[12px] min-w-0">
          <SectionTitle icon={<TrendingUp size={16} />}>Averages</SectionTitle>
          <div className="flex flex-col">
            <StatRow
              label={
                <>
                  Average{" "}
                  <span className="size-[14px] inline-flex items-center justify-center">
                    <InstagramIcon isDark={false} />
                  </span>{" "}
                  engagement rate
                </>
              }
              value={stats.avgEngRate}
            />
            <StatRow label="Average age" value={stats.avgAge} />
            <StatRow label="Average followers count" value={stats.avgFollowers} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px self-stretch" style={{ background: "rgba(58, 73, 95, 0.1)" }} />

        {/* Top Verticals Section */}
        <div className="flex-1 flex flex-col gap-[12px] min-w-0">
          <SectionTitle icon={<ColumnsIcon />}>Top Verticals</SectionTitle>
          <div className="flex flex-col gap-[8px]">
            {stats.verticals.map((vertical, index) => (
              <VerticalBar
                key={index}
                label={vertical.label}
                count={vertical.count}
                total={vertical.total}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-px self-stretch" style={{ background: "rgba(58, 73, 95, 0.1)" }} />

        {/* Search Quality Section */}
        <div className="flex-1 flex flex-col gap-[12px] min-w-0">
          <SectionTitle icon={<StarIcon />}>Search Quality</SectionTitle>
          <div className="flex flex-col gap-[8px]">
            {/* First row: Score + description */}
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-baseline gap-[2px]">
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-medium text-[24px] leading-[28px]"
                  style={{ color: "#155fef" }}
                >
                  {stats.qualityScore}
                </span>
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-light text-[14px] leading-[20px]"
                  style={{ color: "#8b94a2" }}
                >
                  /100
                </span>
              </div>
              <p
                className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[16px]"
                style={{ color: "#54657d" }}
              >
                {stats.qualityDescription}
              </p>
            </div>

            {/* Second row: Stats */}
            <div className="flex items-center gap-[16px]">
              <div className="flex items-center gap-[6px]">
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
                  style={{ color: "#54657d" }}
                >
                  Creators
                </span>
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
                  style={{ color: "#15191e" }}
                >
                  {resultCount}
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
                  style={{ color: "#54657d" }}
                >
                  Posts
                </span>
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
                  style={{ color: "#15191e" }}
                >
                  {stats.posts}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-[16px] py-[12px] text-center"
        style={{
          borderTop: "1px solid rgba(58, 73, 95, 0.1)",
          background: "rgba(58, 73, 95, 0.1)"
        }}
      >
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "#8b94a2" }}
        >
          Hover over a result above to see individual match insights
        </p>
      </div>
    </div>
  );
}
