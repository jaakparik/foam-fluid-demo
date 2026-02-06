import { TrendingUp } from "./icons/foamicons/TrendingUp";
import { InstagramIcon } from "./icons/InstagramIcon";
import { TikTokIcon } from "./icons/TikTokIcon";
import { YouTubeIcon } from "./icons/YouTubeIcon";

interface InsightsDefaultPostsHorizontalProps {
  className?: string;
  resultCount?: number;
  searchTerm?: string;
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

function PlatformBar({
  platform,
  count,
  total,
  icon
}: {
  platform: string;
  count: number;
  total: number;
  icon: React.ReactNode;
}) {
  const percentage = (count / total) * 100;
  return (
    <div className="flex flex-col gap-[2px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <div className="size-[14px]">{icon}</div>
          <p
            className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
            style={{ color: "#54657d" }}
          >
            {platform}
          </p>
        </div>
        <p
          className="font-['Hanken_Grotesk',sans-serif] font-light text-[12px] leading-[20px]"
          style={{ color: "#8b94a2" }}
        >
          {count}
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

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  );
}

// Get stats based on search term
function getStatsForSearchTerm(searchTerm: string, resultCount: number) {
  const lowerTerm = searchTerm.toLowerCase();

  if (lowerTerm.includes("nike")) {
    return {
      avgEngRate: "4.8%",
      avgViews: "156.3K",
      avgReach: "89.2K",
      platforms: [
        { platform: "Instagram", count: 145, icon: <InstagramIcon isDark={false} /> },
        { platform: "TikTok", count: 112, icon: <TikTokIcon isDark={false} /> },
        { platform: "YouTube", count: 63, icon: <YouTubeIcon /> },
      ],
      qualityScore: 87,
      qualityDescription: "High-quality athletic & lifestyle content",
      creators: 12,
    };
  }

  // Default coffee search
  return {
    avgEngRate: "5.2%",
    avgViews: "42.8K",
    avgReach: "28.4K",
    platforms: [
      { platform: "Instagram", count: 98, icon: <InstagramIcon isDark={false} /> },
      { platform: "TikTok", count: 89, icon: <TikTokIcon isDark={false} /> },
      { platform: "YouTube", count: 58, icon: <YouTubeIcon /> },
    ],
    qualityScore: 84,
    qualityDescription: "Great coffee & lifestyle content match",
    creators: 45,
  };
}

export function InsightsDefaultPostsHorizontal({
  className = "",
  resultCount = 245,
  searchTerm = "coffee",
}: InsightsDefaultPostsHorizontalProps) {
  const stats = getStatsForSearchTerm(searchTerm, resultCount);
  const totalPlatforms = stats.platforms.reduce((sum, p) => sum + p.count, 0);

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
          <SectionTitle icon={<TrendingUp size={16} />}>Post Averages</SectionTitle>
          <div className="flex flex-col">
            <StatRow
              label="Average engagement rate"
              value={stats.avgEngRate}
            />
            <StatRow label="Average views" value={stats.avgViews} />
            <StatRow label="Average reach" value={stats.avgReach} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px self-stretch" style={{ background: "rgba(58, 73, 95, 0.1)" }} />

        {/* Platform Distribution Section */}
        <div className="flex-1 flex flex-col gap-[12px] min-w-0">
          <SectionTitle icon={<ShareIcon />}>Platform Distribution</SectionTitle>
          <div className="flex flex-col gap-[8px]">
            {stats.platforms.map((platform, index) => (
              <PlatformBar
                key={index}
                platform={platform.platform}
                count={platform.count}
                total={totalPlatforms}
                icon={platform.icon}
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
                  Posts
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
                  Creators
                </span>
                <span
                  className="font-['Hanken_Grotesk',sans-serif] font-medium text-[14px] leading-[20px]"
                  style={{ color: "#15191e" }}
                >
                  {stats.creators}
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
          Click on a post score to see individual content insights
        </p>
      </div>
    </div>
  );
}
